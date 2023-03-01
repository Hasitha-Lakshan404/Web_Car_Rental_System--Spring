package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.AdminDTO;
import lk.ijse.carRental.dto.CustomerDTO;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:42 AM
 */

public interface AdminService {
    public AdminDTO checkAdminLogIn(String userName);
}
