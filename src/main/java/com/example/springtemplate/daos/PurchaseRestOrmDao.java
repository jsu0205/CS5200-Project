package com.example.springtemplate.daos;

import com.example.springtemplate.models.Purchase;
import com.example.springtemplate.repositories.PurchaseRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PurchaseRestOrmDao {
   @Autowired
   PurchaseRestRepository purchaseRepository;

   @PostMapping("/api/purchases")
   public Purchase createPurchase(@RequestBody Purchase purchase) {
       return purchaseRepository.save(purchase);
   }

   @GetMapping("/api/purchases")
   public List<Purchase> findAllPurchases() {
       return purchaseRepository.findAllPurchases();
   }

   @GetMapping("/api/purchases/{purchaseId}")
   public Purchase findPurchasesById(
           @PathVariable("purchaseId") Integer id) {
       return purchaseRepository.findPurchaseById(id);
   }

//   @GetMapping("/api/purchases/vendor/{vendorId}")
//   public List<Purchase> findPurchasesByVendorId(
//           @PathVariable("vendorId") Integer id) {
//       return purchaseRepository.findPurchasesByVendorId(id);
//   }
//
//   @GetMapping("/api/purchases/tea/{teaId}")
//   public List<Purchase> findPurchasesByTeaId(
//           @PathVariable("teaId") Integer id) {
//       return purchaseRepository.findPurchasesByTeaId(id);
//   }
//
//   @GetMapping("/api/purchases/teaware/{teawareId}")
//   public List<Purchase> findPurchasesByTeawareId(
//           @PathVariable("teawareId") Integer id) {
//       return purchaseRepository.findPurchasesByTeawareId(id);
//   }

   @PutMapping("/api/purchases/{purchaseId}")
   public Purchase updatePurchase(
           @PathVariable("purchaseId") Integer id,
           @RequestBody Purchase purchaseUpdates) {
       Purchase purchase = purchaseRepository.findPurchaseById(id);
    //    purchase.setTeaId(purchaseUpdates.getTeaId());
    //    purchase.setTeawareId(purchaseUpdates.getTeawareId());
    //    purchase.setCustomerId(purchaseUpdates.getTeawareId());
       purchase.setPrice(purchaseUpdates.getPrice());
       purchase.setQuantity(purchaseUpdates.getQuantity());
       return purchaseRepository.save(purchase);
   }

   @DeleteMapping("/api/purchases/{purchaseId}")
   public void deletePurchase(
           @PathVariable("purchaseId") Integer id) {
       purchaseRepository.deleteById(id);
   }
}
