package com.example.edulabscrud.controller;

import com.example.edulabscrud.exception.ResourceNotFoundException;
import com.example.edulabscrud.model.Teacher;
import com.example.edulabscrud.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class TeacherController {

    @Autowired
    private TeacherRepository teacherRepository;

    //get all teachers
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/teacher")
    public List<Teacher> getAllTeachers(){
        return teacherRepository.findAll();
    }

    // get teacher by id rest api
    @CrossOrigin(origins = {"http://localhost:4200","http://localhost:52061"})
    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<Teacher>getTeacherById(@PathVariable String teacherId){
        Teacher teacher = teacherRepository.findById(teacherId)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher not exist with Teacher ID: " + teacherId ));
        return ResponseEntity.ok(teacher);
    }
}
