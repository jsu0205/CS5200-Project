package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Subscription;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubscriptionRestRepository
        extends CrudRepository<Subscription, Integer> {
    @Query(value = "SELECT * FROM subscriptions",
            nativeQuery = true)
    public List<Subscription> findAllSubscriptions();

    @Query(value = "SELECT * FROM subscriptions WHERE id=:subscriptionId",
            nativeQuery = true)
    public Subscription findSubscriptionById(@Param("subscriptionId") Integer id);
}
