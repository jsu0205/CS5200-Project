package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Tea;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeaRestRepository
        extends CrudRepository<Tea, Integer> {
    @Query(value = "SELECT * FROM teas",
            nativeQuery = true)
    public List<Tea> findAllTeas();

    @Query(value = "SELECT * FROM teas WHERE id=:teaId",
            nativeQuery = true)
    public Tea findTeaById(@Param("teaId") Integer id);
}