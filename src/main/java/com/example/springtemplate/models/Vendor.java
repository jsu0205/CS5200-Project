package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="vendors")
public class Vendor extends User {
    @Id
    private Integer id;
    private String businessName;
    private String businessEmail;
    private String aboutUs;
    private boolean verified;

    public Vendor(String username, String password, String first_name, String last_name, String email, Integer id, String businessName, String businessEmail, String aboutUs, boolean verified) {
        super(username, password, first_name, last_name, email);
        this.id = id;
        this.businessName = businessName;
        this.businessEmail = businessEmail;
        this.aboutUs = aboutUs;
        this.verified = verified;
    }

    public Vendor() {

    }

    public Vendor(Integer id, String businessName, String businessEmail, String aboutUs, boolean verified) {
        this.id = id;
        this.businessName = businessName;
        this.businessEmail = businessEmail;
        this.aboutUs = aboutUs;
        this.verified = verified;
    }

    @Override
    public Integer getId() {
        return id;
    }

    @Override
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
