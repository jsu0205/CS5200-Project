package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="inventories")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    private Vendor vendor;
    @ManyToOne
    private Teaware teaware;
    @ManyToOne
    private Tea tea;
    private Integer quantity;
    private float price;

    public Inventory(Integer id, Integer quantity, float price) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
    }

    public Inventory() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Vendor getVendor() {
        return vendor;
    }

    public void setVendor(Vendor vendor) {
        this.vendor = vendor;
    }

    public Teaware getTeaware() {
        return teaware;
    }

    public void setTeaware(Teaware teaware) {
        this.teaware = teaware;
    }

    public Tea getTea() {
        return tea;
    }

    public void setTea(Tea tea) {
        this.tea = tea;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
