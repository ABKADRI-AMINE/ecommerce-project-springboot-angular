package com.example.ecommerceproject.dao;

import com.example.ecommerceproject.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
