package lk.ijse.carRental.controller;

import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.dto.DriverDTO;
import lk.ijse.carRental.service.CustomerService;
import lk.ijse.carRental.service.DriverService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :11:37 PM
 */

@RestController
@RequestMapping("/driver")
@CrossOrigin
public class DriverController {
    @Autowired
    private DriverService service;

    @PostMapping
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO dto){
        service.saveDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+" Added.!",null);
    }

    @PutMapping
    public ResponseUtil updateCustomer(@RequestBody DriverDTO dto){
        service.UpdateDriver(dto);
        return new ResponseUtil("200",dto.getDriverId()+": Updated.!",null);
    }


}
