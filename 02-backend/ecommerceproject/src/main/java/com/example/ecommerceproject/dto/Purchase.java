package com.example.ecommerceproject.dto;

import com.example.ecommerceproject.entity.Address;
import com.example.ecommerceproject.entity.Customer;
import com.example.ecommerceproject.entity.Order;
import com.example.ecommerceproject.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
