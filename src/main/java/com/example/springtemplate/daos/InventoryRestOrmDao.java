package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.repositories.InventoryRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class InventoryRestOrmDao {
   @Autowired
   InventoryRestRepository inventoryRepository;

   @PostMapping("/api/inventories")
   public Inventory createInventory(@RequestBody Inventory inventory) {
       return inventoryRepository.save(inventory);
   }

   @GetMapping("/api/inventories")
   public List<Inventory> findAllInventories() {
       return inventoryRepository.findAllInventories();
   }

   @GetMapping("/api/inventories/{inventoryId}")
   public Inventory findInventoriesById(
           @PathVariable("inventoryId") Integer id) {
       return inventoryRepository.findInventoryById(id);
   }

   @GetMapping("/api/inventories/vendor/{vendorId}")
   public List<Inventory> findInventoriesByVendorId(
           @PathVariable("vendorId") Integer id) {
       return inventoryRepository.findInventoryByVendorId(id);
   }

   @GetMapping("/api/inventories/tea/{teaId}")
   public List<Inventory> findInventoriesByTeaId(
           @PathVariable("teaId") Integer id) {
       return inventoryRepository.findInventoryByTeaId(id);
   }

   @GetMapping("/api/inventories/teaware/{teawareId}")
   public List<Inventory> findInventoriesByTeawareId(
           @PathVariable("teawareId") Integer id) {
       return inventoryRepository.findInventoryByTeawareId(id);
   }

   @PutMapping("/api/inventories/{inventoryId}")
   public Inventory updateInventory(
           @PathVariable("inventoryId") Integer id,
           @RequestBody Inventory inventoryUpdates) {
       Inventory inventory = inventoryRepository.findInventoryById(id);
    //    inventory.setTeaId(inventoryUpdates.getTeaId());
    //    inventory.setTeawareId(inventoryUpdates.getTeawareId());
    //    inventory.setVendorId(inventoryUpdates.getVendorId());
       inventory.setPrice(inventoryUpdates.getPrice());
       inventory.setQuantity(inventoryUpdates.getQuantity());
       return inventoryRepository.save(inventory);
   }

   @DeleteMapping("/api/inventories/{inventoryId}")
   public void deleteInventory(
           @PathVariable("inventoryId") Integer id) {
       inventoryRepository.deleteById(id);
   }
}
