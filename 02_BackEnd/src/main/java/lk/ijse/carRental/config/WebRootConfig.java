package lk.ijse.carRental.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :10:42 PM
 */


@Configuration
@Import(JPAConfig.class)
public class WebRootConfig {
}
