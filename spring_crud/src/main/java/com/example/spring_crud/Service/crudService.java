package com.example.spring_crud.Service;

import com.example.spring_crud.DTO.customerDTO;
import com.example.spring_crud.DTO.customerSaveDTO;
import com.example.spring_crud.DTO.customerUpdateDTO;
import com.example.spring_crud.Entity.customer;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface crudService {
    String addCustomer(customerSaveDTO saveDTO);

    List<customerDTO> all();

    customerDTO updateCustomer(customerUpdateDTO updateDTO);

    int deleteCustomer(int id);
    public customerDTO get(int id);


}
