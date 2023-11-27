package com.bike.app.fullstackbackend.controller;

import com.bike.app.fullstackbackend.errors.saleNotFoundException;
import com.bike.app.fullstackbackend.model.Sale;
import com.bike.app.fullstackbackend.repo.SaleRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3000")
public class SaleController {
    @Autowired
    private SaleRepo saleRepo;

    @PostMapping("/sale")
    Sale newSale(@RequestBody Sale newSale){
        return saleRepo.save(newSale);
    }

    @GetMapping("/sales")
    List<Sale> getAllSales(){
        return saleRepo.findAll();
    }



    @GetMapping("/sale/{id}")
    Sale getUserById(@PathVariable Long id){
        return saleRepo.findById(id)
                .orElseThrow(() -> new saleNotFoundException(id));

    }

}



