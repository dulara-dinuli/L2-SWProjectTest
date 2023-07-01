package com.example.edulabscrud.controller;

import com.example.edulabscrud.exception.ResourceNotFoundException;
import com.example.edulabscrud.model.Attendance;
import com.example.edulabscrud.model.StudentClassID;
import com.example.edulabscrud.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class AttendanceController {
  private AttendanceRepository attendanceRepository;

  @Autowired
  public void setAttendanceRepository(AttendanceRepository attendanceRepository) {
    this.attendanceRepository = attendanceRepository;
  }

  //get all attendance
  @CrossOrigin(origins = {"http://localhost:4200"})
  @GetMapping("/attendance")
  public List<Attendance> getAllAttendance(){
    return attendanceRepository.findAll();
  }

  // get attendance by ids rest api
  @CrossOrigin(origins = {"http://localhost:4200"})
  @GetMapping("/attendance/{studentId}/{classId}")
  public ResponseEntity<Attendance> getAttendanceByIds(@PathVariable Long studentId, @PathVariable String classId){
    StudentClassID studentClassID = new StudentClassID(studentId, classId);
    Attendance attendance = attendanceRepository.findById(studentClassID)
      .orElseThrow(() -> new ResourceNotFoundException("Attendance not found with Student ID and Class ID: " + studentId + " " + classId ));
    return ResponseEntity.ok(attendance);
  }

  // get attendance by ids and get as an array rest api
  @CrossOrigin(origins = {"http://localhost:4200"})
  @GetMapping("/attendanceArray/{studentId}/{classId}")
  public ResponseEntity<String[][]> getAttendanceByIdsAsArray(@PathVariable Long studentId, @PathVariable String classId){
    StudentClassID studentClassID = new StudentClassID(studentId, classId);
    Attendance attendance = attendanceRepository.findById(studentClassID)
      .orElseThrow(() -> new ResourceNotFoundException("Attendance not found with Student ID and Class ID: " + studentId + " " + classId));
    String[] month = new String[12];
    for (int i = 0; i < 12; i++) {
      switch (i) {
        case 0: month[i] = attendance.getJanuary(); break;
        case 1: month[i] = attendance.getFebruary(); break;
        case 2: month[i] = attendance.getMarch(); break;
        case 3: month[i] = attendance.getApril(); break;
        case 4: month[i] = attendance.getMay(); break;
        case 5: month[i] = attendance.getJune(); break;
        case 6: month[i] = attendance.getJuly(); break;
        case 7: month[i] = attendance.getAugest(); break;
        case 8: month[i] = attendance.getSeptember(); break;
        case 9: month[i] = attendance.getOctober(); break;
        case 10: month[i] = attendance.getNovember(); break;
        case 11: month[i] = attendance.getDecember(); break;
      }
    }
    String[][] monthArray = new String[12][4];
    for (int i = 0; i < 12; i++) {
      for (int j = 0; j < 4; j++) {
        monthArray[i][j] = String.valueOf(month[i].charAt(j));
      }
    }
    return ResponseEntity.ok(monthArray);
  }

}
