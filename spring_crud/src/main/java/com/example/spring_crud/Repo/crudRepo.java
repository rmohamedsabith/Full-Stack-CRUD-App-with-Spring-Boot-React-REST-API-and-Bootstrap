package com.example.spring_crud.Repo;

import com.example.spring_crud.Entity.customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface crudRepo extends JpaRepository<customer,Integer> {
}