import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentInformationComponent } from './owner-page/student-information/student-information.component';
import { StudentDataComponent } from './owner-page/student-data/student-data.component';
import { EnrollmentInfoComponent } from './owner-page/enrollment-info/enrollment-info.component';
import { AttendanceInfoComponent } from './owner-page/attendance-info/attendance-info.component';
import { ClassDataComponent } from './owner-page/class-data/class-data.component';
import { TeacherDataComponent } from './owner-page/teacher-data/teacher-data.component';
import { StaffInformationComponent } from './owner-page/staff-information/staff-information.component';
import { SummaryReportComponent } from './owner-page/summary-report/summary-report.component';
import { PaymentInfoComponent } from './owner-page/payment-info/payment-info.component';


const routes: Routes = [
  {path:'student-information', component:StudentInformationComponent},
  {path:'student-data/:studentId/:parentNic', component: StudentDataComponent}, 
  {path:'enrollment-info/:studentId', component: EnrollmentInfoComponent},
  {path:'attendance-info/:studentId', component: AttendanceInfoComponent},
  {path:'class-data/:classId/:teacherId', component: ClassDataComponent}, 
  {path:'teacher-data/:teacherId', component: TeacherDataComponent},
  {path:'staff-information', component:StaffInformationComponent},
  {path:'summary-report', component:SummaryReportComponent},
  {path:'payment-info', component:PaymentInfoComponent}
  // {path:'', redirectTo:'student-information', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
