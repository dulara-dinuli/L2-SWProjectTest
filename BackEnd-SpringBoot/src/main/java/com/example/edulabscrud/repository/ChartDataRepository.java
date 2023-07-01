package com.example.edulabscrud.repository;

import com.example.edulabscrud.model.StaffTypeChartData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChartDataRepository extends JpaRepository<StaffTypeChartData, String> {

  @Query(value = "SELECT 'Teacher' AS type, (SELECT COUNT(*) * 100 / (COUNT(*) + (SELECT COUNT(*) FROM receptionist)) FROM teacher) AS count UNION ALL SELECT 'Receptionist' AS type, (SELECT COUNT(*) * 100 / (COUNT(*) + (SELECT COUNT(*) FROM teacher)) FROM receptionist) AS count", nativeQuery = true)
  public List<StaffTypeChartData> getStaffTypeChartData();

  @Query(value = "SELECT SUM(count) AS totalStaff FROM (SELECT COUNT(*) AS count FROM teacher UNION ALL SELECT COUNT(*) AS count FROM receptionist) AS subquery", nativeQuery = true)
  public Long getTotalStaff();

  @Query(value = "SELECT COUNT(*) AS totalTeacher FROM teacher", nativeQuery = true)
  public Long getTotalTeacher();

  @Query(value = "SELECT COUNT(*) AS totalReceptionist FROM receptionist", nativeQuery = true)
  public Long getTotalReceptionist();

  @Query(value = "SELECT COUNT(*) AS totalStudent FROM student", nativeQuery = true)
  public Long getTotalStudent();

  @Query(value = "SELECT COUNT(DISTINCT subject) AS totalSubject FROM class", nativeQuery = true)
  public Long getTotalSubject();

  @Query(value = "SELECT COUNT(*) AS totalClass FROM class", nativeQuery = true)
  public Long getTotalClass();

  @Query(value = "SELECT (COUNT(*) / (SELECT COUNT(*) FROM Student) * 100) AS count, title As type FROM Student GROUP BY title", nativeQuery = true)
  public List<StaffTypeChartData> getStudentGenderChartData();

  @Query(value = "SELECT COUNT(student_id) AS count, class_id As type FROM enrollment GROUP BY class_id", nativeQuery = true)
  public List<StaffTypeChartData> getClassEnrollmentChartData();

}
