package com.example.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="teawares")
public class Teaware {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Enumerated(EnumType.STRING)
    private TeawareCategory type;
    private Integer capacity;
    private String image;
    @OneToMany(mappedBy = "teaware")
    @JsonIgnore
    private List<Purchase> purchases;
    @OneToMany(mappedBy = "teaware")
    @JsonIgnore
    private List<Inventory> inventories;

    public enum TeawareCategory {
        TEACUP,
        GAIWAN,
        TEAPOT,
        YIXING_CLAY,
        MISCELLANEOUS
    }    

    public Teaware(Integer id, String name, TeawareCategory type, Integer capacity, String image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.capacity = capacity;
        this.image = image;
    }

    public Teaware() {
    }

    public List<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<Purchase> purchases) {
        this.purchases = purchases;
    }

    public List<Inventory> getInventories() {
        return inventories;
    }

    public void setInventories(List<Inventory> inventories) {
        this.inventories = inventories;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TeawareCategory getType() {
        return type;
    }

    public void setType(TeawareCategory type) {
        this.type = type;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
