package io.tutorial.spring.garageApp.model;

import jakarta.persistence.*;


@Entity
public class Car {

    public enum Color{
        RED,
        BLUE,
        GREEN,
        YELLOW
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String model;
    private String brand;
    private Color color ;

    public Car(){

    }

    public Car(long id, String model, Color color, String brand) {
        super();;
        this.id = id;
        this.model = model;
        this.color = color;
        this.brand = brand;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
