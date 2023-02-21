package lk.ijse.carRental.config;


import lk.ijse.carRental.advice.AppWideExceptionHandler;
import lk.ijse.carRental.controller.CustomerController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :10:42 PM
 */

@Configuration
@ComponentScan(basePackageClasses = {AppWideExceptionHandler.class, CustomerController.class})
@EnableWebMvc
public class WebAppConfig {

}
