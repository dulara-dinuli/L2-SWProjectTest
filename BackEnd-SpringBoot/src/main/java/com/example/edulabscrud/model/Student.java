package com.example.edulabscrud.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data()
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "student")
public class Student implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "studentId", nullable = false)
    private long studentId;

    @Column(name = "password")
    private String password;

    @Column(name = "title")
    private String title;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "contactNo")
    private String contactNo;

    @Column(name = "email")
    private String email;

    @Column(name = "dob")
    @JsonFormat(pattern="dd/MM/yyyy")
    private Date dob;

    @Column(name = "address")
    private String address;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn (name = "parentNic", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Parent parent;

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    private Set<Enrollment> enrollment = new HashSet<>();

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    private Set<Payment> payment = new HashSet<>();

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY)
    private Set<Attendance> attendance = new HashSet<>();

  @JsonIgnore
    public Parent getParent() {return parent;}

  @JsonIgnore
    public void setParent(Parent parent) {this.parent = parent;}

  @JsonIgnore
    public Set<Enrollment> getEnrollment() { return enrollment; }

  @JsonIgnore
    public void setEnrollment(Set<Enrollment> enrollment) { this.enrollment = enrollment; }

    @JsonIgnore
    public Set<Payment> getPayment() { return payment; }

    @JsonIgnore
    public void setPayment(Set<Payment> payment) { this.payment = payment; }

  @JsonIgnore
  public Set<Attendance> getAttendance() { return attendance; }

  @JsonIgnore
  public void setAttendance(Set<Attendance> attendance) { this.attendance = attendance; }


  // Retrieve parent Nic
    public String getParentNic() { return parent.getParentNic(); }
}
