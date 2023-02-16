package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.AdminDTO;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:42 AM
 */

public interface AdminService {
    AdminDTO checkAdminLogIn(String id, String password);
}
