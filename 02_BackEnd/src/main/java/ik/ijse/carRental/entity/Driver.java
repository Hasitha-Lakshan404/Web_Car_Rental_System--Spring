package ik.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :2:56 PM
 */

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Driver {
    @Id
    private String driverId;
    private String name;
    private String nic;
    private String drivingLicenseNumber;
    private LocalDate dob;
    private String status;
}
