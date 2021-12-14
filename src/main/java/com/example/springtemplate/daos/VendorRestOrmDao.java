package com.example.springtemplate.daos;

import com.example.springtemplate.models.Inventory;
import com.example.springtemplate.models.Subscription;
import com.example.springtemplate.models.Vendor;
import com.example.springtemplate.repositories.VendorRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VendorRestOrmDao {
    @Autowired
    VendorRestRepository vendorRepository;

    @PostMapping("/api/vendors")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorRepository.save(vendor);
    }
    
    @GetMapping("/api/vendors")
    public List<Vendor> findAllVendors() {
        return vendorRepository.findAllVendors();
    }
    
    @GetMapping("/api/vendors/{vendorId}")
    public Vendor findVendorById(
            @PathVariable("vendorId") Integer id) {
        return vendorRepository.findVendorById(id);
    }

    @GetMapping("/api/vendors/{vendorId}/subscriptions")
    public List<Subscription> findSubscriptionsByVendor(
            @PathVariable("vendorId") Integer id) {
        return vendorRepository.findById(id).get()
                .getSubscriptions();
    }

    @GetMapping("/api/vendors/{vendorId}/inventories")
    public List<Inventory> findInventoriesByVendor(
            @PathVariable("vendorId") Integer id) {
        return vendorRepository.findById(id).get()
                .getInventories();
    }
    
    @PutMapping("/api/vendors/{vendorId}")
    public Vendor updateVendor(
            @PathVariable("vendorId") Integer id,
            @RequestBody Vendor vendorUpdates) {
        Vendor vendor = vendorRepository.findVendorById(id);
        vendor.setAboutUs(vendorUpdates.getAboutUs());
        vendor.setBusinessEmail(vendorUpdates.getBusinessEmail());
        vendor.setBusinessName(vendorUpdates.getBusinessName());
        vendor.setVerified(vendorUpdates.isVerified());
        return vendorRepository.save(vendor);
    }
    
    @DeleteMapping("/api/vendors/{vendorId}")
    public void deleteVendor(
            @PathVariable("vendorId") Integer id) {
        vendorRepository.deleteById(id);
    }
}