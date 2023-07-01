package com.example.edulabscrud.controller;

import com.example.edulabscrud.exception.ResourceNotFoundException;
import com.example.edulabscrud.model.Student;
import com.example.edulabscrud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    //get all students
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/student")

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    // get student by id rest api
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/student/{studentId}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long studentId){
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with Student ID: " + studentId ));
        return ResponseEntity.ok(student);
    }

//    // create student rest api
//    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
//    @PostMapping("/student")
//    public Student createStudent(@RequestBody Student student) {
//        return studentRepository.save(student);
//    }

//    // update student rest api
//    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
//    @PutMapping("/student/{studentId}")
//    public ResponseEntity<Student> updateStudent(@PathVariable Long studentId, @RequestBody Student studentDetails){
//        Student student = studentRepository.findById(studentId)
//                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with Student ID: " + studentId ));
//
//        student.setTitle(studentDetails.getTitle());
//        student.setFirstName(studentDetails.getFirstName());
//        student.setLastName(studentDetails.getLastName());
//        student.setContactNo(studentDetails.getContactNo());
//        student.setEmail(studentDetails.getEmail());
//        student.setDob(studentDetails.getDob());
//        student.setAddress(studentDetails.getAddress());
//
//        Student updatedStudent = studentRepository.save(student);
//        return ResponseEntity.ok(updatedStudent);
//    }

//    // delete student rest api
//    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
//    @DeleteMapping("/student/{studentId}")
//    public ResponseEntity <Map<String, Boolean>> deleteStudent(@PathVariable Long studentId){
//        Student student = studentRepository.findById(studentId)
//                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with Student ID: " + studentId));
//        studentRepository.delete(student);
//        Map<String, Boolean> response = new HashMap<>();
//        response.put ("deleted", Boolean.TRUE);
//        return ResponseEntity.ok(response);
//    }

}
