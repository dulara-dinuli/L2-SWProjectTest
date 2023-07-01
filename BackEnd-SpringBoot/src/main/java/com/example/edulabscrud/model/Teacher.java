package com.example.edulabscrud.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "teacher")
public class Teacher implements Serializable{

    @Id
    @Column(name = "teacherId", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String teacherId;

    @Column(name = "password")
    private String password;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "nic")
    private String nic;

    @Column(name = "telNo")
    private String telNo;

    @Column(name = "address")
    private String address;

    @OneToMany(mappedBy = "teacher", fetch = FetchType.LAZY)
    private Set<Class> classes = new HashSet<>();

  @JsonIgnore
    public Set<Class> getClasses() { return classes; }

  @JsonIgnore
    public void setClasses(Set<Class> classes) { this.classes = classes; }
}
