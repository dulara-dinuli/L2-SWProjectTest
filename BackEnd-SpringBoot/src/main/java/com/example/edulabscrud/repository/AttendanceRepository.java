package com.example.edulabscrud.repository;

import com.example.edulabscrud.model.Attendance;
import com.example.edulabscrud.model.StudentClassID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, StudentClassID>{
}


