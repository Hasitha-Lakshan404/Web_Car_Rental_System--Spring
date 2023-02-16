package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:27 AM
 */

public interface DriverRepo extends JpaRepository<Driver,String> {
}
