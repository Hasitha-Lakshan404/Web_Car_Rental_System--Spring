package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.RentalDetail;
import lk.ijse.carRental.entity.RentalDetails_PK;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:32 AM
 */

public interface RentalDetailsRepo extends JpaRepository<RentalDetail, RentalDetails_PK> {
}
