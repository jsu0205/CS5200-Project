package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Teaware;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeawareRestRepository
        extends CrudRepository<Teaware, Integer> {
    @Query(value = "SELECT * FROM teawares",
            nativeQuery = true)
    public List<Teaware> findAllTeawares();

    @Query(value = "SELECT * FROM teawares WHERE id=:teawareId",
            nativeQuery = true)
    public Teaware findTeawareById(@Param("teawareId") Integer id);
}
