package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.dto.ReservationDTO;
import lk.ijse.carRental.entity.Car;
import lk.ijse.carRental.entity.Customer;
import lk.ijse.carRental.entity.Driver;
import lk.ijse.carRental.entity.Rental;
import lk.ijse.carRental.repo.CarRepo;
import lk.ijse.carRental.repo.CustomerRepo;
import lk.ijse.carRental.repo.DriverRepo;
import lk.ijse.carRental.repo.RentalRepo;
import lk.ijse.carRental.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :01:20 AM
 */

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    RentalRepo carReservationRepo;

    @Autowired
    CustomerRepo customerRepo;

    @Autowired
    CarRepo carRepo;

    @Autowired
    DriverRepo driverRepo;

    @Autowired
    ModelMapper mapper;


    @Override
    public String generateReservationId() {
        String id = carReservationRepo.generateReservationId();
        if (!(id == null)) {

            String prefix = id.substring(0, 1);  // extract the prefix, e.g. "C"
            int number = Integer.parseInt(id.substring(1));  // extract the numeric portion and parse it as an integer
            number++;  // increment the number
            return prefix + String.format("%03d", number);


        } else {
            return "R001";
        }
    }

    @Override
    public void requestReservation(ReservationDTO reservationDTO) {
        if (!carReservationRepo.existsById(reservationDTO.getRentalId())) {

            Rental carReservation = mapper.map(reservationDTO, Rental.class);

            Customer customer = customerRepo.findById(reservationDTO.getCustomer().getCustomerId()).get();
//            System.out.println("Customer ID :"+reservationDTO.getCustomer().getCustomerId());
            Car car = carRepo.findById(reservationDTO.getCar().getRegistrationId()).get();
//            System.out.println("Car : "+carRepo.findById(reservationDTO.getCar().getRegistrationId()));
//            System.out.println("Car with get : "+carRepo.findById(reservationDTO.getCar().getRegistrationId()).get());



            carReservation.setCustomer(mapper.map(customer,Customer.class));
            carReservation.setCar(car);


            System.out.println("Driver eke ======="+reservationDTO.getDriverStatus());
//            Rental entity = mapper.map(reservationDTO, Rental.class);
            carReservationRepo.save(carReservation);



//            carReservationRepo.save(carReservation);
            /*if (reservationDTO.getDriverStatus().equalsIgnoreCase("YES")) {

                Driver driver = driverRepo.selectDriverForReservation(
                        reservationDTO.getPick_up_date(),
                        reservationDTO.getReturn_date());

                DriverScheduleDTO driverScheduleDTO = new DriverScheduleDTO(
                        reservationDTO.getPick_up_time(),
                        reservationDTO.getPick_up_date(),
                        reservationDTO.getReturn_date(),
                        mapper.map(driver, DriverDTO.class),
                        mapper.map(carReservation, ReservationDTO.class));

                driverScheduleRepo.save(mapper.map(driverScheduleDTO, DriverSchedule.class));

            } else {
                carReservationRepo.save(carReservation);
            }*/
        } else {
            throw new RuntimeException("Your Reservation Request can't Send in this moment,Try Again..!");
        }
    }

    @Override
    public void updateReservationStatus(String rentalId, String driverId, String status) {

    }

    @Override
    public List<ReservationDTO> getAllPendingReservation() {
        return null;
    }

    @Override
    public ReservationDTO getReservationDetail(String id) {
        return null;
    }

    @Override
    public List<ReservationDTO> getAllTodayReservation() {
        return null;
    }

    @Override
    public List<ReservationDTO> getAllTodayPickUps() {
        return null;
    }

    @Override
    public List<ReservationDTO> getCustomerReservationByStatus(String id, String status) {
        return null;
    }

    @Override
    public List<ReservationDTO> getAllReservation() {
        return mapper.map(carReservationRepo.findAll(), new TypeToken<List<ReservationDTO>>() {}.getType());
    }
}
