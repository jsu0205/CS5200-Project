package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.Purchase;
import com.example.springtemplate.models.Subscription;
import com.example.springtemplate.repositories.CustomerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerRestOrmDao {
    @Autowired
    CustomerRestRepository customerRepository;

    @PostMapping("/api/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }
    
    @GetMapping("/api/customers")
    public List<Customer> findAllCustomers() {
        return customerRepository.findAllCustomers();
    }
    
    @GetMapping("/api/customers/{customerId}")
    public Customer findCustomerById(
            @PathVariable("customerId") Integer id) {
        return customerRepository.findCustomerById(id);
    }

    @GetMapping("/api/customers/{customerId}/purchases")
    public List<Purchase> findPurchasesByCustomer(
            @PathVariable("customerId") Integer id) {
        return customerRepository.findById(id).get()
                .getPurchases();
    }

    @GetMapping("/api/customers/{customerId}/subscriptions")
    public List<Subscription> findSubscriptionsByVendor(
            @PathVariable("customerId") Integer id) {
        return customerRepository.findById(id).get()
                .getSubscriptions();
    }
    
    @PutMapping("/api/customers/{customerId}")
    public Customer updateCustomer(
            @PathVariable("customerId") Integer id,
            @RequestBody Customer customerUpdates) {
        Customer customer = customerRepository.findCustomerById(id);
        customer.setShippingAddress(customerUpdates.getShippingAddress());
        customer.setMoneySpent(customerUpdates.getMoneySpent());
        return customerRepository.save(customer);
    }
    
    @DeleteMapping("/api/customers/{customerId}")
    public void deleteCustomer(
            @PathVariable("customerId") Integer id) {
        customerRepository.deleteById(id);
    }
}