package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="purchases")
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    private Customer customer;
    @ManyToOne
    private Teaware teaware;
    @ManyToOne
    private Tea tea;
    private Integer quantity;
    private float price;


    public Purchase(Integer id, Integer quantity, float price) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
    }

    public Purchase() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
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
