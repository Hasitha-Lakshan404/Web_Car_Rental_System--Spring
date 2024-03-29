package lk.ijse.carRental.controller;

import lk.ijse.carRental.dto.AdminDTO;
import lk.ijse.carRental.service.AdminService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :3/1/2023
 * Time :2:35 PM
 */

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping(params = {"userName"})
    public ResponseUtil loginAdmin(@RequestParam String userName){
        AdminDTO adminDTO = adminService.checkAdminLogIn(userName);
        return new ResponseUtil("200","Login Success!",adminDTO);
    }


}
