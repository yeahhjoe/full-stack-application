package com.bike.app.fullstackbackend.repo;

import com.bike.app.fullstackbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepo extends JpaRepository<Product, Long> {

}
