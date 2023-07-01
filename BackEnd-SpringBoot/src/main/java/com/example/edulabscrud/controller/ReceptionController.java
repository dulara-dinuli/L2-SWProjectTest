package com.example.edulabscrud.controller;

import com.example.edulabscrud.exception.ResourceNotFoundException;
import com.example.edulabscrud.model.Receptionist;
import com.example.edulabscrud.repository.ReceptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class ReceptionController {

  @Autowired
  private ReceptionRepository receptionRepository;

  //get all teachers
  @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
  @GetMapping("/reception")
  public List<Receptionist> getAllTeachers(){
    return receptionRepository.findAll();
  }

  // get teacher by id rest api
  @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
  @GetMapping("/receptionist/{receptionId}")
  public ResponseEntity<Receptionist> getTeacherById(@PathVariable Long receptionId){
    Receptionist receptionist = receptionRepository.findById(receptionId)
      .orElseThrow(() -> new ResourceNotFoundException("Teacher not exist with Teacher ID: " + receptionId ));
    return ResponseEntity.ok(receptionist);
  }
}
