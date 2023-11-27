package com.bike.app.fullstackbackend.controller;

import com.bike.app.fullstackbackend.errors.saleNotFoundException;
import com.bike.app.fullstackbackend.model.Salesperson;
import com.bike.app.fullstackbackend.repo.SalespersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SalespersonController {
    @Autowired
    private SalespersonRepo salespersonRepo;

    //TODO: Post a salesperson to the database
    @PostMapping("/salesperson")
    Salesperson newSalesperson(@RequestBody Salesperson newSalesperson){
        return salespersonRepo.save(newSalesperson);
    }

    // TODO: return a list of all the salespeople

    @GetMapping("/salespeople")
    List<Salesperson> getAllSalesperson(){
        return salespersonRepo.findAll();
    }


    // TODO: Update a salesperson

    @PutMapping("/salesperson/{id}")
    Salesperson updateSalesperson(@RequestBody Salesperson newSalesperson, @PathVariable Long id){
        return salespersonRepo.findById(id)
                .map(salesperson -> {
                    salesperson.setFirstName(newSalesperson.getFirstName());
                    salesperson.setLastName(newSalesperson.getLastName());
                    salesperson.setAddress(newSalesperson.getAddress());
                    salesperson.setManager(newSalesperson.getManager());
                    salesperson.setStartDate(newSalesperson.getStartDate());
                    salesperson.setTerminationDate(newSalesperson.getTerminationDate());
                    return salespersonRepo.save(salesperson);
                }).orElseThrow(() -> new saleNotFoundException(id));
    }
}
