package com.bike.app.fullstackbackend.controller;

import com.bike.app.fullstackbackend.model.Customer;
import com.bike.app.fullstackbackend.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CustomerController {
    @Autowired
    private CustomerRepo customerRepo;

    @PostMapping("/customer")
    Customer newCustomer(@RequestBody Customer newCustomer){
        return customerRepo.save(newCustomer);
    }

    @GetMapping("/customers")
    List<Customer> getAllCustomers(){
        return customerRepo.findAll();
    }
}
