package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Driver;
import lk.ijse.carRental.entity.DriverSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : Hasitha Lakshan
 * Project Name: CarRentalSystem
 * Date        : 3/8/2023
 * Time        : 12:17 PM
 */

public interface DriverScheduleRepo extends JpaRepository<lk.ijse.carRental.entity.DriverSchedule,String> {

    @Query(value = "SELECT driverId FROM driveschedule WHERE scheduleId=?1", nativeQuery = true)
    DriverSchedule getDriverIdByScheduleId(String rId);

}
