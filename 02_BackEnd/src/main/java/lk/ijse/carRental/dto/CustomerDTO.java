package lk.ijse.carRental.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Id;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:08 AM
 */

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String customerId;
    private String name;
    private String address;
    private String nic;
    private String drivingLicenseNumber;
    private String contactNumber;
    private String email;
    private String password;
    private String imageLocation;
}
