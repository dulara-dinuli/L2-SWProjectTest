package com.example.edulabscrud.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data()
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StaffTypeChartData implements Serializable {


  private double count;

  @Id
  private String type;

}
