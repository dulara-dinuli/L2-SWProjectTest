package com.example.edulabscrud.controller;
import com.example.edulabscrud.exception.ResourceNotFoundException;
import com.example.edulabscrud.model.Parent;
import com.example.edulabscrud.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/")
public class ParentController {

    @Autowired
    private ParentRepository parentRepository;

    //get all parents
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/parent")
    public List<Parent> getAllParents(){
        return parentRepository.findAll();
    }

    // get parent by nic rest api
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/parent/{parentNic}")
    public ResponseEntity<Parent>getParentById(@PathVariable String parentNic){
        Parent parent = parentRepository.findById(parentNic)
                .orElseThrow(() -> new ResourceNotFoundException("Parent not exist with Parent NIC: " + parentNic ));
        return ResponseEntity.ok(parent);
    }
}
