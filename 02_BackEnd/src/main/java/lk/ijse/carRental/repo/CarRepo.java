package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:22 AM
 */

public interface CarRepo extends JpaRepository<Car,String> {
}