package com.example.spring_crud.Service;

import com.example.spring_crud.DTO.customerDTO;
import com.example.spring_crud.DTO.customerSaveDTO;
import com.example.spring_crud.DTO.customerUpdateDTO;
import com.example.spring_crud.Entity.customer;
import com.example.spring_crud.Repo.crudRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class crud implements crudService{

    @Autowired
   private crudRepo repo;
    @Override
    public String addCustomer(customerSaveDTO saveDTO) {
        customer cus=new customer(
                saveDTO.getName(),
                saveDTO.getAddress(),
                saveDTO.getAge()
        );
        repo.save(cus);

        return cus.getName();
    }

    @Override
    public List<customerDTO> all() {
        List<customer>cus=repo.findAll();
        List<customerDTO>custDTO=new ArrayList<>();
        for(customer a:cus)
        {
            customerDTO DTO=new customerDTO(
                    a.getId(),
                    a.getName(),
                    a.getAddress(),
                    a.getAge()
            );
            custDTO.add(DTO);
        }
        return custDTO;
    }

    @Override
    public customerDTO updateCustomer(customerUpdateDTO updateDTO) {

        if(repo.existsById(updateDTO.getId()))
        {
            customer customer=repo.getById(updateDTO.getId());
            customer.setName(updateDTO.getName());
            customer.setAddress(updateDTO.getAddress());
            customer.setAge((updateDTO.getAge()));
            repo.save(customer);
            customerDTO custDTO=new customerDTO(
                    customer.getId(),customer.getName(),customer.getAddress(),customer.getAge()
            );
            return custDTO;
        }
        else {
            System.out.println("Id is noe=t exist in the server");
            return null;
        }

    }

    @Override
    public int deleteCustomer(int id) {
        if(repo.existsById(id))
        {
            repo.deleteById(id);
            return id;
        }
        else {
            System.out.println("id is not in the Server");
            return 0;
        }


    }


    public customerDTO get(int id) {
        customer cust2 =repo.getById(id);
        customerDTO custDTO2=new customerDTO(
                cust2.getId(),cust2.getName(),cust2.getAddress(),cust2.getAge()
        );

        return custDTO2;

    }
}
