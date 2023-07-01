package com.example.edulabscrud.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSubTypes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data()
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parent")
public class Parent implements Serializable {

    @Id
    @Column(name = "parentNic", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String parentNic;

    @Column(name = "title")
    private String title;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "contactNo")
    private String contactNo;

    @Column(name = "address")
    private String address;

  @OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
    private Set<Student> student = new HashSet<>();

//  @JsonIgnore
    public Set<Student> getStudent() {
        return student;
    }

  //  @JsonIgnore
    public void setStudent(Set<Student> student) {
        this.student = student;
    }
}
