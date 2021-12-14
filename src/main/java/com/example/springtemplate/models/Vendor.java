package com.example.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="vendors")
public class Vendor {
    @Id
    private Integer id;
    private String businessName;
    private String businessEmail;
    private String aboutUs;
    private boolean verified;
    @OneToMany(mappedBy = "vendor")
    @JsonIgnore
    private List<Inventory> inventories;
    @OneToMany(mappedBy = "vendor")
    @JsonIgnore
    private List<Subscription> subscriptions;

    public Vendor() {
    }

    public List<Subscription> getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(List<Subscription> subscriptions) {
        this.subscriptions = subscriptions;
    }

    public Vendor(Integer id, String businessName, String businessEmail, String aboutUs, boolean verified) {
        this.id = id;
        this.businessName = businessName;
        this.businessEmail = businessEmail;
        this.aboutUs = aboutUs;
        this.verified = verified;
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

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getBusinessEmail() {
        return businessEmail;
    }

    public void setBusinessEmail(String businessEmail) {
        this.businessEmail = businessEmail;
    }

    public String getAboutUs() {
        return aboutUs;
    }

    public void setAboutUs(String aboutUs) {
        this.aboutUs = aboutUs;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }
}
