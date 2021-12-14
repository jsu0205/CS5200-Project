package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Purchase;
import com.example.springtemplate.models.Teaware;
import com.example.springtemplate.repositories.TeawareRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeawareRestOrmDao {
   @Autowired
   TeawareRestRepository teawareRepository;

   @PostMapping("/api/teawares")
   public Teaware createTeaware(@RequestBody Teaware teaware) {
       return teawareRepository.save(teaware);
   }

   @GetMapping("/api/teawares")
   public List<Teaware> findAllTeawares() {
       return teawareRepository.findAllTeawares();
   }

   @GetMapping("/api/teawares/{teawareId}")
   public Teaware findTeawareById(
           @PathVariable("teawareId") Integer id) {
       return teawareRepository.findTeawareById(id);
   }

    @GetMapping("/api/teawares/{teawareId}/purchases")
    public List<Purchase> findPurchasesByTeaware(
            @PathVariable("teawareId") Integer id) {
        return teawareRepository.findById(id).get()
                .getPurchases();
    }

    @GetMapping("/api/teawares/{teawareId}/inventories")
    public List<Inventory> findInventoriesByTeaware(
            @PathVariable("teawareId") Integer id) {
        return teawareRepository.findById(id).get()
                .getInventories();
    }

   @PutMapping("/api/teawares/{teawareId}")
   public Teaware updateTeaware(
           @PathVariable("teawareId") Integer id,
           @RequestBody Teaware teawareUpdates) {
       Teaware teaware = teawareRepository.findTeawareById(id);
       teaware.setName(teawareUpdates.getName());
       teaware.setCapacity(teawareUpdates.getCapacity());
       teaware.setType(teawareUpdates.getType());
       teaware.setImage(teawareUpdates.getImage());
       return teawareRepository.save(teaware);
   }

   @DeleteMapping("/api/teawares/{teawareId}")
   public void deleteTeaware(
           @PathVariable("teawareId") Integer id) {
       teawareRepository.deleteById(id);
   }
}
