package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Inventory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface InventoryRestRepository
        extends CrudRepository<Inventory, Integer> {
    @Query(value = "SELECT * FROM inventories",
            nativeQuery = true)
    public List<Inventory> findAllInventories();

    @Query(value = "SELECT * FROM inventories WHERE id=:inventoryId",
            nativeQuery = true)
    public Inventory findInventoryById(@Param("inventoryId") Integer id);

    @Query(value = "SELECT * FROM inventories WHERE vendor_id=:vendorId",
            nativeQuery = true)
    public List<Inventory> findInventoryByVendorId(@Param("vendorId") Integer id);

    @Query(value = "SELECT * FROM inventories WHERE tea_id=:teaId",
            nativeQuery = true)
    public List<Inventory> findInventoryByTeaId(@Param("teaId") Integer id);

    @Query(value = "SELECT * FROM inventories WHERE teaware_id=:teawareId",
            nativeQuery = true)
    public List<Inventory> findInventoryByTeawareId(@Param("teawareId") Integer id);
}
