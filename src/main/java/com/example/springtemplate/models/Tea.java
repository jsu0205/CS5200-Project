package com.example.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="teas")
public class Tea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Enumerated(EnumType.STRING)
    private TeaCategory type;
    private String producer;
    private String image;
    @OneToMany(mappedBy = "tea")
    @JsonIgnore
    private List<Purchase> purchases;
    @OneToMany(mappedBy = "tea")
    @JsonIgnore
    private List<Inventory> inventories;

    public enum TeaCategory {
        WHITE,
        GREEN,
        OOLONG,
        BLACK,
        RAW_PUER,
        RIPE_PUER
    }

    public Tea(Integer id, String name, TeaCategory type, String producer, String image) { // missing TeaCategory type in arguments
        this.id = id;
        this.name = name;
        this.type = type;
        this.producer = producer;
        this.image = image;
    }

    public Tea() {

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

    public TeaCategory getType() {
        return type;
    }

    public void setType(TeaCategory type) {
        this.type = type;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
