package ik.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :2:53 PM
 */


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Car {
    @Id
    private String registrationId;
    private String Brand;
    private String type;
    private String model;
    private String fuelType;
    private String transmissionType;
    private String color;
    private int noOfPassenger;
    private String image1;
    private String image2;
    private String image3;
    private String image4;
    private long lastServiceMileage;
    private long freeServiceMileage;
    private double dailyRate;
    private double monthlyRate;
    private double priceForExtraKm;
    private String availability;
}