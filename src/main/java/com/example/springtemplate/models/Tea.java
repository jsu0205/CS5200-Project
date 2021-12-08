package com.example.springtemplate.models;
import javax.persistence.*;

@Entity
@Table(name="teas")
public class Tea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private TeaCategory type;
    private String producer;
    private String image;

    public Tea(Integer id, String name, TeaCategory type, String producer, String image) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.producer = producer;
        this.image = image;
    }

    public Tea() {

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
