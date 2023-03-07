package lk.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :2:44 PM
 */

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Rental {
    @Id
    private String rentalId;
    private Date date;
    private Date pickupDate;
    private Date returnDate;
    private double amount;
    private double total_damage_viewer_payment;
    private String pickupLocation;
    private String returnLocation;
    private String bankSlip;
    private int noOfDays;
    private String reservationStatus;
    private String driverStatus;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerId")
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "registrationId")
    private Car car;
}
