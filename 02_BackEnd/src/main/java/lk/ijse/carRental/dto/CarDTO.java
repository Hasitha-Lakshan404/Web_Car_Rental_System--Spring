package lk.ijse.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:05 AM
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDTO {
    private String registrationId;
    private String brand;
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
    private String VehicleDescription;
    private double lastServiceMileage;
    private double freeKmDay;
    private long freeKmMonth;
    private double dailyRate;
    private double monthlyRate;
    private double priceForExtraKm;
    private double waiver_payment;
    private String availability;


    public CarDTO(String registrationId, String brand, String type, String model, String fuelType, String transmissionType, String color, int noOfPassenger, String vehicleDescription, long lastServiceMileage, long freeKmDay, long freeKmMonth, double dailyRate, double monthlyRate, double priceForExtraKm, double waiver_payment, String availability) {
        this.registrationId = registrationId;
        this.brand = brand;
        this.type = type;
        this.model = model;
        this.fuelType = fuelType;
        this.transmissionType = transmissionType;
        this.color = color;
        this.noOfPassenger = noOfPassenger;
        VehicleDescription = vehicleDescription;
        this.lastServiceMileage = lastServiceMileage;
        this.freeKmDay = freeKmDay;
        this.freeKmMonth = freeKmMonth;
        this.dailyRate = dailyRate;
        this.monthlyRate = monthlyRate;
        this.priceForExtraKm = priceForExtraKm;
        this.waiver_payment = waiver_payment;
        this.availability = availability;
    }

}
