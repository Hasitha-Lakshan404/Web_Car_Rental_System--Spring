package lk.ijse.carRental.config;


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
@ComponentScan(basePackages = "lk.ijse.carRental")
@EnableWebMvc
public class WebAppConfig {
}
