package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="customers")
public class Customer extends User {
    @Id
    private Integer id;
    private String shippingAddress;
    private float moneySpent;

    public Customer(String username, String password, String first_name, String last_name, String email, Integer id, String shippingAddress, float moneySpent) {
        super(username, password, first_name, last_name, email);
        this.id = id;
        this.shippingAddress = shippingAddress;
        this.moneySpent = moneySpent;
    }

    public Customer() {
    }

    public Customer(Integer id, String shippingAddress, float moneySpent) {
        this.id = id;
        this.shippingAddress = shippingAddress;
        this.moneySpent = moneySpent;
    }

    @Override
    public Integer getId() {
        return id;
    }

    @Override
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
