package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:30 AM
 */

public interface PaymentRepo extends JpaRepository<Payment,String> {
}
