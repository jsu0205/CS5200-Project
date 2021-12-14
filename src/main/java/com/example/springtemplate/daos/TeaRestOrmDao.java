package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Purchase;
import com.example.springtemplate.models.Tea;
import com.example.springtemplate.repositories.TeaRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeaRestOrmDao {
   @Autowired
   TeaRestRepository teaRepository;

   @PostMapping("/api/teas")
   public Tea createTea(@RequestBody Tea tea) {
       return teaRepository.save(tea);
   }

   @GetMapping("/api/teas")
   public List<Tea> findAllTeas() {
       return teaRepository.findAllTeas();
   }

   @GetMapping("/api/teas/{teaId}")
   public Tea findTeaById(
           @PathVariable("teaId") Integer id) {
       return teaRepository.findTeaById(id);
   }

   @GetMapping("/api/teas/{teaId}/purchases")
   public List<Purchase> findPurchasesByTea(
           @PathVariable("teaId") Integer id) {
       return teaRepository.findById(id).get()
               .getPurchases();
   }

    @GetMapping("/api/teas/{teaId}/inventories")
    public List<Inventory> findInventoriesByTea(
            @PathVariable("teaId") Integer id) {
        return teaRepository.findById(id).get()
                .getInventories();
    }

    @PutMapping("/api/teas/{teaId}")
   public Tea updateTea(
           @PathVariable("teaId") Integer id,
           @RequestBody Tea teaUpdates) {
       Tea tea = teaRepository.findTeaById(id);
       tea.setName(teaUpdates.getName());
       tea.setType(teaUpdates.getType());
       tea.setProducer(teaUpdates.getProducer());
       tea.setImage(teaUpdates.getImage());
       return teaRepository.save(tea);
   }

   @DeleteMapping("/api/teas/{teaId}")
   public void deleteTea(
           @PathVariable("teaId") Integer id) {
       teaRepository.deleteById(id);
   }
}
