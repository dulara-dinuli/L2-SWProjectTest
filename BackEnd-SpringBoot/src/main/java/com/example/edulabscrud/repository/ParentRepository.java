package com.example.edulabscrud.repository;

import com.example.edulabscrud.model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentRepository extends JpaRepository<Parent, String>{
}
