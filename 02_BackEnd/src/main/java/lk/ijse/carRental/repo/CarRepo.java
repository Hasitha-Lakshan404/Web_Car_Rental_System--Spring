package lk.ijse.carRental.repo;

import lk.ijse.carRental.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:22 AM
 */

public interface CarRepo extends JpaRepository<Car,String> {

    @Modifying
    @Transactional
    @Query(value= "UPDATE Car SET image1=:image1,image2=:image2, image3=:image3, image4=:image4 WHERE registrationId=:registrationId",nativeQuery=true)
    void updateCarFilePaths(@Param("image1")String image1,@Param("image2")String image2,@Param("image3")String image3,@Param("image4")String image4,@Param("registrationId")String registrationId);

    Car getCarByRegistrationId(String registrationId);


}
