package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:24 AM
 */

public interface CustomerRepo extends JpaRepository<Customer,String> {
//    Customer findCustomerByName(String name);
//    Customer findByNameAndAddress(String name, String address);
//    Customer findByCustomerId(String id);
}

