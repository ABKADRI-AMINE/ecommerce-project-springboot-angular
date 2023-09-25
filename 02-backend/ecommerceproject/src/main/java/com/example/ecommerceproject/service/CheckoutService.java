package com.example.ecommerceproject.service;

import com.example.ecommerceproject.dto.Purchase;
import com.example.ecommerceproject.dto.PurchaseResponse;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
