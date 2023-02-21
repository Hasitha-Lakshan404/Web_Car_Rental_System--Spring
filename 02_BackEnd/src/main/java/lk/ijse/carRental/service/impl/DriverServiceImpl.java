package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.DriverDTO;
import lk.ijse.carRental.entity.Customer;
import lk.ijse.carRental.entity.Driver;
import lk.ijse.carRental.repo.CustomerRepo;
import lk.ijse.carRental.repo.DriverRepo;
import lk.ijse.carRental.service.DriverService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :01:12 AM
 */

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public DriverDTO checkDriverLogIn(String name, String password) {
        return null;
    }

    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (repo.existsById(driverDTO.getDriverId())) {
            throw new RuntimeException("Driver "+driverDTO.getDriverId()+" Already Exist..!");
        }
        repo.save(mapper.map(driverDTO, Driver.class));

    }

    @Override
    public void UpdateDriver(DriverDTO driverDTO) {

    }

    @Override
    public void deleteDriver(String id) {

    }

    @Override
    public DriverDTO getDriverDetail(String id) {
        return null;
    }

    @Override
    public List<DriverDTO> getAllDriverDetail() {
        return null;
    }

    @Override
    public List<DriverDTO> getTodayAvailableAndOccupiedDrivers(String status) {
        return null;
    }
}
