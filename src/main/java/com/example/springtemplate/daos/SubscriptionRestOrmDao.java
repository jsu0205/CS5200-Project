package com.example.springtemplate.daos;

import com.example.springtemplate.models.Subscription;
import com.example.springtemplate.repositories.SubscriptionRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SubscriptionRestOrmDao {
   @Autowired
   SubscriptionRestRepository subscriptionRepository;

   @PostMapping("/api/subscriptions")
   public Subscription createSubscription(@RequestBody Subscription subscription) {
       return subscriptionRepository.save(subscription);
   }

   @GetMapping("/api/subscriptions")
   public List<Subscription> findAllSubscriptions() {
       return subscriptionRepository.findAllSubscriptions();
   }

   @GetMapping("/api/subscriptions/{subscriptionId}")
   public Subscription findSubscriptionsById(
           @PathVariable("subscriptionId") Integer id) {
       return subscriptionRepository.findSubscriptionById(id);
   }

   @PutMapping("/api/subscriptions/{subscriptionId}")
   public Subscription updateSubscription(
           @PathVariable("subscriptionId") Integer id,
           @RequestBody Subscription subscriptionUpdates) {
       Subscription subscription = subscriptionRepository.findSubscriptionById(id);
       subscription.setDateJoined(subscriptionUpdates.getDateJoined());
       return subscriptionRepository.save(subscription);
   }

   @DeleteMapping("/api/subscriptions/{subscriptionId}")
   public void deleteSubscription(
           @PathVariable("subscriptionId") Integer id) {
       subscriptionRepository.deleteById(id);
   }
}
