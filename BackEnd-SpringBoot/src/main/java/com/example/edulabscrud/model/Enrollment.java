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
@Table(name = "enrollment")
public class Enrollment implements Serializable{

    @Id
    @Column(name = "erollmentId", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String enrollmentId;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn (name = "studentId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Student student;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn (name = "classId", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Class classes;

    @JsonIgnore
    public Student getStudent() { return student; }

    @JsonIgnore
    public void setStudent(Student student) { this.student = student; }

    @JsonIgnore
    public Class getClasses() { return classes; }

    @JsonIgnore
    public void setClasses(Class classes) { this.classes = classes; }

    // Retrieve student details
    public long getStudentId() { return student.getStudentId(); }

    // Retrieve class details
    public String getClassId() { return classes.getClassId(); }
    public String getClassSubject() { return classes.getSubject(); }
    public long getClassGrade() { return classes.getGrade(); }
    public String getClassType() { return classes.getType(); }
    public String getClassDayOfWeek() { return classes.getDayOfWeek(); }
    public String getClassStartTime() { return classes.getStartTime(); }
    public String getClassDuration() { return classes.getDuration(); }
    public long getClassMonthlyFee() { return classes.getMonthlyFee(); }
    public String getClassTeacherShare() { return classes.getTeacherShare(); }

//     Retrieve teacher details
    public String getTeacherId() { return classes.getTeacherId();}
//    public String getTeacherAddress() { return classes.getTeacherAddress();}
//    public String getTeacherEmail() { return classes.getTeacherEmail();}
    public String getTeacherFirstName() { return classes.getTeacherFirstName();}
    public String getTeacherLastName() { return classes.getTeacherLastName();}
//    public String getTeacherNic() { return classes.getTeacherNic();}
//    public String getTeacherTelNo() { return classes.getTeacherTelNo();}

}
