package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.AdminDTO;
import lk.ijse.carRental.service.AdminService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :01:05 AM
 */

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Override
    public AdminDTO checkAdminLogIn(String id, String password) {
        return null;
    }
}
