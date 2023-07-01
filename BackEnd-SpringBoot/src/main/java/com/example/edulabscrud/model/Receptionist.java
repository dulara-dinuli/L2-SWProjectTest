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
@Table(name = "Receptionist")
public class Receptionist implements Serializable {

  @Id
  @Column(name = "receptionId", nullable = false)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long receptionId;

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

}
