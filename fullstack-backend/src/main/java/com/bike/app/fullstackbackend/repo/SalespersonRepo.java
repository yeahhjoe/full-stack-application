package com.bike.app.fullstackbackend.repo;

import com.bike.app.fullstackbackend.model.Salesperson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalespersonRepo extends JpaRepository<Salesperson, Long> {
}
