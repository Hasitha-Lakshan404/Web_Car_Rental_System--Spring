package lk.ijse.carRental.service.impl;

import lk.ijse.carRental.dto.PaymentDTO;
import lk.ijse.carRental.service.PaymentService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :01:16 AM
 */

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {


    @Override
    public String generateReservationBillIdId() {
        return null;
    }

    @Override
    public void makePaymentForReservation(PaymentDTO paymentDTO) {

    }

    @Override
    public String getIncomeByDate(String type, String start_date, String end_date) {
        return null;
    }

    @Override
    public List<PaymentDTO> getTodayIncomeList() {
        return null;
    }
}
