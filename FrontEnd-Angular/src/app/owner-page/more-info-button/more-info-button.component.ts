// Create more info drop down list

import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'; // Import cell rendering components
import { ICellRendererParams } from 'ag-grid-community';  // Import cell rendering parameters
import { StudentService } from '../StudentService/student.service';
import { Router } from '@angular/router';
import { StudentInformationComponent } from '../student-information/student-information.component';
import { EnrollmentInfoComponent } from '../enrollment-info/enrollment-info.component';

@Component({
  selector: 'app-more-info-button',
  template: `
    <button type="button" class="btn btn-outline-secondary mr-2" data-bs-toggle="dropdown" aria-expanded="false" placement="bottom"
      [ngbPopover]="popContent" container="body">
      <i class="fa-sharp fa-solid fa-info"></i></button>
    <ng-template #popContent>
    <ul class="dropdown-menu" *ngIf="data.studentId && !data.enrollmentId" >
      <li><a class="dropdown-item" [routerLink]="['/enrollment-info', data.studentId]">Enrollment</a></li>
      <li><a class="dropdown-item" [routerLink]="['/attendance-info', data.studentId]">Attendence</a></li>
      <!-- <li><a class="dropdown-item" [routerLink]="['/class-payment-info', data.studentId]">Payment</a></li> -->
      <li><hr class="dropdown-divider"></li>
      <li class="dropdown-item dropdown-toggle"> Action</li>
      <li class="dropdown-item"><button  (click)="studentData(data.studentId, data.parentNic)"><i class="fa-sharp fa-solid fa-eye dropTwoIcon"></i>View</button></li>
      <li class="dropdown-item"><button><i class="fa-solid fa-pen dropTwoIcon"></i>Update</button></li>
      <li class="dropdown-item"><button><i class="fa-solid fa-trash dropTwoIcon"></i>Remove</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf= "data.enrollmentId">
    <li class="dropdown-item"><button  (click)="classData(data.classId, data.teacherId)">Class Info</button></li>
    <li class="dropdown-item"><button  (click)="teacherData(data.teacherId)">Teacher Info</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf= "data.classId && !data.enrollmentId">
    <li class="dropdown-item"><button  (click)="classData(data.classId, data.teacherId)">Class Info</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf="data.receptionId" >
      <li class="dropdown-item"><button  (click)="receptionData(data.receptionId)"><i class="fa-sharp fa-solid fa-eye dropTwoIcon"></i>View</button></li>
      <li class="dropdown-item"><button><i class="fa-solid fa-pen dropTwoIcon"></i>Update</button></li>
      <li class="dropdown-item"><button><i class="fa-solid fa-trash dropTwoIcon"></i>Remove</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf="data.teacherId" >
      <li class="dropdown-item"><button  (click)="teacherData(data.teacherId)"><i class="fa-sharp fa-solid fa-eye dropTwoIcon"></i>View</button></li>
      <li class="dropdown-item"><button><i class="fa-solid fa-pen dropTwoIcon"></i>Update</button></li>
      <li class="dropdown-item"><button><i class="fa-solid fa-trash dropTwoIcon"></i>Remove</button></li>
    </ul>

</ng-template>
  `,
  styles: [
  ]
})
export class MoreInfoButtonComponent implements OnInit, ICellRendererAngularComp{

  data: any;

  // get table timestamp row data
  agInit(params: any): void {
    this.data = params.data || null;
  }

  refresh(): boolean {
    return true;
  }

  constructor(private studentService: StudentService,
    private router: Router){}


  ngOnInit(): void {
  }

  // navigate to the relevent Student data
  studentData(studentId: number, parentNic: String){
    console.log(studentId
      )
    this.router.navigate(['student-data', studentId, parentNic]);
  }

  // navigate to the relevent Class data
  classData(classId: String, teacherId: String){
    this.router.navigate(['class-data', classId, teacherId]);
  }

  // navigate to the relevent Teacher data
  teacherData(teacherId: String){
    this.router.navigate(['teacher-data', teacherId]);
  }

  
  // navigate to the relevent Reception data
  receptionData(teacherId: String){
    this.router.navigate(['teacher-data', teacherId]);
  }


}
