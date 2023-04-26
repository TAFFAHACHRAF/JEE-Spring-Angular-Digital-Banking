package com.achraf.taffah.jee.repositories;

import com.achraf.taffah.jee.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
