package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Purchase;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PurchaseRestRepository
        extends CrudRepository<Purchase, Integer> {
    @Query(value = "SELECT * FROM purchases",
            nativeQuery = true)
    public List<Purchase> findAllPurchases();

    @Query(value = "SELECT * FROM purchases WHERE id=:purchaseId",
            nativeQuery = true)
    public Purchase findPurchaseById(@Param("purchaseId") Integer id);
}
