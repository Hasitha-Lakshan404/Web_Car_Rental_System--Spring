package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:14 AM
 */

public interface RentalRepo extends JpaRepository<Rental,String> {
    @Query(value = "SELECT rentalId FROM Rental ORDER BY rentalId DESC limit 1", nativeQuery = true)
    String generateReservationId();

}
