package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:24 AM
 */

public interface CustomerRepo extends JpaRepository<Customer,String> {
}
