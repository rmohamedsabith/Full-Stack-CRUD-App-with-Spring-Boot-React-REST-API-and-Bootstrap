package com.example.spring_crud.controller;

import com.example.spring_crud.DTO.customerDTO;
import com.example.spring_crud.DTO.customerSaveDTO;
import com.example.spring_crud.DTO.customerUpdateDTO;
import com.example.spring_crud.Entity.customer;
import com.example.spring_crud.Repo.crudRepo;
import com.example.spring_crud.Service.crud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.beans.Customizer;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path="/api/v1/customer")
public class customerController {
    @Autowired
     private crud sab ;

    @PostMapping("/save")
    public String save(@RequestBody customerSaveDTO saveDTO)
    {
        String name =sab.addCustomer(saveDTO);
        return name;
    }

    @GetMapping("/getall")
    public List<customerDTO> getall()    {

        List<customerDTO>customers=sab.all();
        return customers;
    }

    @PutMapping("/update")
    public customerDTO update(@RequestBody customerUpdateDTO updateDTO)
    {
        customerDTO customer =sab.updateCustomer(updateDTO);
        return customer;
    }

    @DeleteMapping("/delete/{id}")
        public int update(@PathVariable int id)
    {
        int s =sab.deleteCustomer(id);
        return s;
    }
    @GetMapping("/get/{id}")
    public customerDTO getall(@PathVariable int id){

        customerDTO customers=sab.get(id);
        return customers;
    }


}
