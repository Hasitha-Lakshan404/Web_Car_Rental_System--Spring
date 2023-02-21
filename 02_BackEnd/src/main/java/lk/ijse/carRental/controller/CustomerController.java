package lk.ijse.carRental.controller;

import lk.ijse.carRental.dto.CustomerDTO;
import lk.ijse.carRental.service.CustomerService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

   @GetMapping
    public String get(){
        System.out.println("awooo");
        return "awooo 2";
    }

    @PostMapping
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO dto){
        service.saveCustomer(dto);
        return new ResponseUtil("200",dto.getCustomerId()+" Added.!",null);
    }

    /*@PostMapping
    public String cat(){
        System.out.println("dsada");
        return "POst Mapping";
    }*/

}
