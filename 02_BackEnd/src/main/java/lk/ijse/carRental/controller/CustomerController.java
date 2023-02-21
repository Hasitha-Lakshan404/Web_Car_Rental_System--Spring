package lk.ijse.carRental.controller;

import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.service.CustomerService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.ArrayList;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :11:00 PM
 */


@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService service;

    @PostMapping
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO dto){
        service.saveCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+" Added.!",null);
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(CustomerDTO dto){
        service.updateCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+": Updated.!",null);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil deleteCustomer(String id){
        service.deleteCustomer(id);
        return new ResponseUtil("200",id+" : Deleted.!",null);
    }


    @GetMapping
    public ResponseUtil getAllCustomer(){
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomerDetail();
        return new ResponseUtil("200"," Success.!",allCustomers);
    }



}
