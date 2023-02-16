package lk.ijse.carRental.service;

import lk.ijse.carRental.dto.CustomerDTO;


import java.util.List;

/**
 * @author : Hasitha Lakshan
 * Project :CarRentalSystem
 * Date :2/17/2023
 * Time :12:46 AM
 */

public interface CustomerService {

    void saveCustomer(CustomerDTO customerDTO);

    String updateCustomer(CustomerDTO customerDTO);

    void deleteCustomer (String id);

    CustomerDTO getCustomerDetail(String id);

    List<CustomerDTO> getAllCustomerDetail();

    List<CustomerDTO> getTodayRegisteredCustomers();
}
