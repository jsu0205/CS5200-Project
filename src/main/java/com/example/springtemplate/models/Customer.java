package com.example.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="customers")
public class Customer {
    @Id
    private Integer id;
    private String shippingAddress;
    private float moneySpent;
    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    private List<Purchase> purchases;
    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    private List<Subscription> subscriptions;

    public List<Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(List<Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }

    public Customer(Integer id, String shippingAddress, float moneySpent) {
        this.id = id;
        this.shippingAddress = shippingAddress;
        this.moneySpent = moneySpent;
    }

    public Customer() {
    }

    public List<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<Purchase> purchases) {
        this.purchases = purchases;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public float getMoneySpent() {
        return moneySpent;
    }

    public void setMoneySpent(float moneySpent) {
        this.moneySpent = moneySpent;
    }
}
