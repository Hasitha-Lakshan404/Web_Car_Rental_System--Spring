package ik.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;
import java.io.Serializable;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :2:58 PM
 */

@NoArgsConstructor
@AllArgsConstructor
@Data
@Embeddable
@ToString
public class RentalDetails_PK implements Serializable {

    private String rentalId;
    private String carId;
}
