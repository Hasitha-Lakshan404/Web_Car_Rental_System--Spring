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
 * Time :2:54 PM
 */

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Admin {
    @Id
    private String adminId;
    private String email;
    private String userName;
    private String password;
}
