package lk.ijse.carRental.controller;

import lk.ijse.carRental.dto.ReservationDTO;
import lk.ijse.carRental.service.ReservationService;
import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:00 AM
 */

@RestController
@RequestMapping("/reservation")
@CrossOrigin
public class ReservationController {
    @Autowired
    ReservationService carReservationService;

    @GetMapping(path = "generateReservationId", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateReservationId() {
        return new ResponseUtil("200", "Done", carReservationService.generateReservationId());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseUtil requestReservation(@RequestPart("reservation") ReservationDTO carReservation, @RequestPart("file") MultipartFile file) {
//        System.out.println(carReservation);
        carReservation.setBankSlip("uploads/" + carReservation.getBankSlip());

        carReservationService.requestReservation(carReservation);

        try {
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            file.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file.getOriginalFilename()));

        } catch (IOException | URISyntaxException e) {
            e.printStackTrace();
            return new ResponseUtil("500", "Reservation Sending Filed.Try Again Latter", carReservation);
        }
        return new ResponseUtil("200", "Request Send Successfully", carReservation);
    }

    /*@PutMapping(params = {"rentalId", "driverId", "status"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateReservationStatus(@RequestParam String rentalId, @RequestParam String driverId, @RequestParam String status) {
        carReservationService.updateReservationStatus(rentalId, driverId, status);
        return new ResponseUtil("200", status + " Request Successfully", null);
    }

    //return reservations they are in pending status
    @GetMapping(path = "pendingReservation", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPendingReservation() {
        return new ResponseUtil("200", "Done", carReservationService.getAllPendingReservation());
    }*/

    @GetMapping(path = "getReservation/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getReservationDetail(@PathVariable String id) {
        return new ResponseUtil("200", "Done", carReservationService.getReservationDetail(id));
    }

    @GetMapping(path = "detail", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllReservation() {
        return new ResponseUtil("200", "Done", carReservationService.getRentalByReservationStatus());
    }

    @GetMapping(path = "getDriverId/{rid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getDriverId(@PathVariable String rid) {
        System.out.println("mekata awa driverId : "+rid);
        return new ResponseUtil("200", "Done", carReservationService.getDriverIdByScheduleId(rid));
    }

    @PutMapping()
    public ResponseUtil updateReservation(@RequestBody ReservationDTO dto){
        carReservationService.updateReservation(dto);
        return new ResponseUtil("200",dto.getReservationStatus()+": Updated.!",null);
    }

}
