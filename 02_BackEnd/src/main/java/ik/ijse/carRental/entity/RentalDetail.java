package ik.ijse.carRental.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :3:10 PM
 */


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@ToString
public class RentalDetail {
    @EmbeddedId
    private RentalDetails_PK id;

    @ManyToOne
    private Driver driverId;
    private String rentalStatus;
    private String paymentSlip;
}
