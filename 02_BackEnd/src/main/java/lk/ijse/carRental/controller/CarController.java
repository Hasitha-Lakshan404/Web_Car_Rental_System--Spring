package lk.ijse.carRental.controller;

import lk.ijse.carRental.service.CarService;
import lk.ijse.carRental.service.CustomerService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :11:36 PM
 */

@RestController
@RequestMapping("/car")
@CrossOrigin
public class CarController {

    @Autowired
    private CarService service;


    @PutMapping(path = "/uploadImg/{registrationNum}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil uploadImagesAndPath(@RequestPart("image_1") MultipartFile image_1, @RequestPart("image_2") MultipartFile image_2, @RequestPart("image_3") MultipartFile image_3, @RequestPart("image_4") MultipartFile image_4, @PathVariable String registrationNum) {
        try {

            String projectPath = String.valueOf(new File("E:\\imageSave\\uploads"));
            File uploadsDir = new File(projectPath + "\\carImage");
            uploadsDir.mkdir();

            image_1.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + image_1.getOriginalFilename()));
            image_2.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + image_2.getOriginalFilename()));
            image_3.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + image_3.getOriginalFilename()));
            image_4.transferTo(new File(uploadsDir.getAbsolutePath() + "\\" + image_4.getOriginalFilename()));

            String carFrontViewPath = projectPath + "\\carImage" + image_1.getOriginalFilename();
            String carBackViewPath = projectPath + "\\carImage" + image_2.getOriginalFilename();
            String carSideViewPath = projectPath + "\\carImage" + image_3.getOriginalFilename();
            String carInteriorViewPath = projectPath + "\\carImage" + image_4.getOriginalFilename();

            service.uploadCarImages(carFrontViewPath, carBackViewPath, carSideViewPath, carInteriorViewPath, registrationNum);

            return new ResponseUtil("200", "Uploaded", null);

        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseUtil("500",e.getMessage(),null);
        }
    }


    @GetMapping(path = "allCarDetail", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCarDetail() {
        return new ResponseUtil("200", "Done", service.getAllCarDetail());
    }


}

