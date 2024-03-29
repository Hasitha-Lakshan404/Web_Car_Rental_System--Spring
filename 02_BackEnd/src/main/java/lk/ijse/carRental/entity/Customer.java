package lk.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :2:23 PM
 */

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Customer {
    @Id
    private String customerId;
    private String name;
    private String address;
    private String nic;
    private String drivingLicenseNumber;
    private String contactNumber;
    private String email;
    private String userName;
    private String password;
    private String imageLocation;

    @OneToMany
    private List<Rental> rentalDetail;
}
