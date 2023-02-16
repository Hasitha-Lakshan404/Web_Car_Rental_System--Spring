package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:20 AM
 */

public interface AdminRepo extends JpaRepository<Admin,String> {
}
