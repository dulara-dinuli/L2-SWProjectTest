package com.example.edulabscrud.repository;
import com.example.edulabscrud.model.Receptionist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceptionRepository extends JpaRepository<Receptionist, Long> {
}
