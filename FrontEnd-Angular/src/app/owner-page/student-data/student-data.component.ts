import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../StudentService/student.service';
import { Student } from 'src/app/ModelClass/student';
import { Parent } from 'src/app/ModelClass/parent';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {
  studentId!: number
  student!: Student

  parentNic!: String
  parent!: Parent

  constructor(private route: ActivatedRoute, private studentService: StudentService, private parentService: StudentService) {} 

  //Get the studentId/ parentId as the parameter and show the relavent content
  ngOnInit(): void {

    //Student data
    this.studentId = this.route.snapshot.params["studentId"];
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    });
  

    //Parent data
    this.parentNic = this.route.snapshot.params["parentNic"];
    this.parentService.getParentByNic(this.parentNic).subscribe(data => {
      this.parent = data;
    });
    console.log(this.parent);
  }
}
