package com.example.edulabscrud.controller;

import com.example.edulabscrud.exception.ResourceNotFoundException;
import com.example.edulabscrud.model.Payment;
import com.example.edulabscrud.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class PaymentController {
    @Autowired
    private PaymentRepository paymentRepository;

    //get all payments
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/payment")
    public List<Payment> getAllPayments(){
        return paymentRepository.findAll();
    }


    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/payment/{paymentId}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable String paymentId){
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResourceNotFoundException("Enrollment not exist with Enrollment ID: " + paymentId ));
        return ResponseEntity.ok(payment);
    }

}
