package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Vendor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VendorRestRepository
        extends CrudRepository<Vendor, Integer> {
    @Query(value = "SELECT * FROM vendors",
            nativeQuery = true)
    public List<Vendor> findAllVendors();

    @Query(value = "SELECT * FROM vendors WHERE id=:vendorId",
            nativeQuery = true)
    public Vendor findVendorById(@Param("vendorId") Integer id);
}
