package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.CarDTO;

import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:43 AM
 */

public interface CarService {

    void saveCar(CarDTO carDTO);

    void updateCar(CarDTO carDTO);

    void deleteCar(String id);

    CarDTO getCarDetail(String id);

    List<CarDTO> getAllCarDetail();

    List<CarDTO> getCarsUnderMaintain();

    List<CarDTO> getCarsNeedMaintain();

    List<CarDTO> getUnavailableOrAvailableCarsByStatus(String status);

    List<CarDTO> getAvailableAndRentalCarsForReservation(String pick_up_date, String return_date, String status);

    void setCarStatusUnavailableOrAvailable(String id, String status);

    List<CarDTO> sortCarsByAttributes(CarDTO carDTO);

    void uploadCarImages(String carFrontViewPath, String carBackViewPath, String carSideViewPath, String carInteriorViewPath, String registrationNum);

    CarDTO searchCarByRegistrationId(String registrationId);
}
