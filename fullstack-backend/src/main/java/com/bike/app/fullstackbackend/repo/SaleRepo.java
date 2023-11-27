package com.bike.app.fullstackbackend.repo;

import com.bike.app.fullstackbackend.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepo extends JpaRepository<Sale, Long> {
}
