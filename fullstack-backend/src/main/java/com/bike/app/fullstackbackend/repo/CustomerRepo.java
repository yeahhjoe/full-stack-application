package com.bike.app.fullstackbackend.repo;

import com.bike.app.fullstackbackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Long> {

}
