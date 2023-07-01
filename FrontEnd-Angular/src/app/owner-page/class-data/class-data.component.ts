import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../StudentService/student.service';
import { Location } from '@angular/common';
import { Teacher } from '../../ModelClass/teacher';
import { ClassInfo } from 'src/app/ModelClass/class-info';

@Component({
  selector: 'app-class-data',
  templateUrl: './class-data.component.html',
  styleUrls: ['./class-data.component.css']
})
export class ClassDataComponent {
  classId!: String
  classInfo!: ClassInfo

  teacherId!: String
  teacher!: Teacher

  constructor(private route: ActivatedRoute, private classService: StudentService, private _location: Location) {} 

  //Get the classId as the parameter and show the relavent content
  ngOnInit(): void {
    this.classId = this.route.snapshot.params["classId"];
    this.classService.getClassById(this.classId).subscribe(data => {
      this.classInfo = data;
    });

  // Get the teacherId as the parameter and show the relavent content  
    this.teacherId = this.route.snapshot.params["teacherId"];
    this.classService.getTeacherById(this.teacherId).subscribe(data => {
      this.teacher = data;
    });
    console.log(this.teacher);

  }

  //Go to the previous page
  previousPage() {
    this._location.back();
  }
}
