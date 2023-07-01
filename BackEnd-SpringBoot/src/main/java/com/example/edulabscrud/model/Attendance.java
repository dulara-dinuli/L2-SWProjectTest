package com.example.edulabscrud.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;

@Data()
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "attendance")
public class Attendance implements Serializable {

  @EmbeddedId
  private StudentClassID studentClassId;

  @ManyToOne
  @MapsId("studentId")
  private Student student;

  @ManyToOne
  @MapsId("classId")
  private Class classes;

//  @MapsId("year")
  @Column(name = "year")
  private Long year;

  @Column(name = "january")
  private String january;

  @Column(name = "february")
  private String february;

  @Column(name = "march")
  private String march;

  @Column(name = "april")
  private String april;

  @Column(name = "may")
  private String may;

  @Column(name = "june")
  private String june;

  @Column(name = "july")
  private String july;

  @Column(name = "augest")
  private String augest;

  @Column(name = "september")
  private String september;

  @Column(name = "october")
  private String october;

  @Column(name = "november")
  private String november;

  @Column(name = "december")
  private String december;

  @JsonIgnore
  public Student getStudent() { return student; }

  @JsonIgnore
  public void setStudent(Student student) { this.student = student; }

  @JsonIgnore
  public Class getClasses() { return classes; }

  @JsonIgnore
  public void setClasses(Class classes) { this.classes = classes; }

//  @JsonIgnore
//  public Long getYear() { return year; }

//  @JsonIgnore
//  public void setYear(Long year) { this.year = year; }


}
