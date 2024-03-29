package lk.ijse.carRental.advice;

import lk.ijse.carRental.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/16/2023
 * Time :11:10 PM
 */

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler({RuntimeException.class})
    public ResponseUtil handleException(RuntimeException e){
        return new ResponseUtil("500",e.getMessage(),null);
    }

}
