package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.DriverScheduleDTO;
import lk.ijse.carRental.dto.ReservationDTO;

import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :01:01 AM
 */

public interface ReservationService {

    String generateReservationId();

    void requestReservation(ReservationDTO ReservationDTO);

    List<ReservationDTO> getAllPendingReservation();

    ReservationDTO getReservationDetail(String id);

    List<ReservationDTO> getAllTodayReservation();

    List<ReservationDTO> getAllTodayPickUps();

    List<ReservationDTO> getCustomerReservationByStatus(String id, String status);

    List<ReservationDTO> getAllReservation();

    List<ReservationDTO> getRentalByReservationStatus();

    DriverScheduleDTO getDriverIdByScheduleId(String id);

    void updateReservation(ReservationDTO ReservationDTO);
}
