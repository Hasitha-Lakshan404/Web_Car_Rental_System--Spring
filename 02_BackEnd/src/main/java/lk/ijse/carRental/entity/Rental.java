package lk.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
    @ManyToOne
    private Customer customerId;
    private LocalDate date;
    private LocalDate pickupDate;
    private double amount;
    private LocalDate returnDate;
    private double total_damage_viewer_payment;
    private String pickupLocation;
    private String returnLocation;
}
