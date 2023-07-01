package com.example.edulabscrud.model;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Embeddable
@Data()
@AllArgsConstructor
@NoArgsConstructor
public class StudentClassID implements Serializable{

  @Column(name = "studentId")
  private Long studentId;

  @Column(name = "classId")
  private String classId;

//  @Column(name = "year")
//  private Long year;

}
