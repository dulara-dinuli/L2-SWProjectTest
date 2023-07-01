package com.example.edulabscrud.controller;


import com.example.edulabscrud.model.StaffTypeChartData;
import com.example.edulabscrud.repository.ChartDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/")
public class ChartDataController {

  @Autowired
  private ChartDataRepository chartDataRepository;


  @GetMapping("/StaffTypeChartData")
  public List<StaffTypeChartData> getStaffTypeChartData(){
    return chartDataRepository.getStaffTypeChartData();
  }

  @GetMapping("/TotalStaffChartData")
  public Long getTotalStaffChartData(){
    return chartDataRepository.getTotalStaff();
  }

  @GetMapping("/TotalTeacherChartData")
  public Long getTotalTeacherChartData(){
    return chartDataRepository.getTotalTeacher();
  }

  @GetMapping("/TotalReceptionistChartData")
  public Long getTotalReceptionistChartData(){
    return chartDataRepository.getTotalReceptionist();
  }

  @GetMapping("/TotalStudentChartData")
  public Long getTotalStudentChartData(){
    return chartDataRepository.getTotalStudent();
  }

  @GetMapping("/TotalSubjectChartData")
  public Long getTotalSubjectChartData(){
    return chartDataRepository.getTotalSubject();
  }

  @GetMapping("/TotalClassChartData")
  public Long getTotalClassChartData(){
    return chartDataRepository.getTotalClass();
  }

  @GetMapping("/StudentGenderChartData")
  public List<StaffTypeChartData> getStudentGenderChartData(){
    return chartDataRepository.getStudentGenderChartData();
  }

  @GetMapping("/ClassEnrollmentChartData")
  public List<StaffTypeChartData> getEnrollmentClassChartData(){
    return chartDataRepository.getClassEnrollmentChartData();
  }
}
