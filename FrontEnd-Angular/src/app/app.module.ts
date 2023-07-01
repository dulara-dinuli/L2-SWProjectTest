import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentDashboardComponent } from './student_components/student-dashboard/student-dashboard.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ReceptionPageComponent } from './reception-page/reception-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentProfileComponent } from './student_components/student-profile/student-profile.component';
import { StudentClassesComponent } from './student_components/student-classes/student-classes.component';
import { StudentEnrollComponent } from './student_components/student-enroll/student-enroll.component';
import { StudentPaymentsComponent } from './student_components/student-payments/student-payments.component';
import { StudentNotificationComponent } from './student_components/student-notification/student-notification.component';
import { AttendanceInfoComponent } from './owner-page/attendance-info/attendance-info.component';
import { EnrollmentInfoComponent } from './owner-page/enrollment-info/enrollment-info.component';
import { StaffInfoComponent } from './owner-page/staff-info/staff-info.component';
import { StudentDataComponent } from './owner-page/student-data/student-data.component';
import { StudentInformationComponent } from './owner-page/student-information/student-information.component';
import { SummaryReportComponent } from './owner-page/summary-report/summary-report.component';
import { TeacherDataComponent } from './owner-page/teacher-data/teacher-data.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ClassDataComponent } from './owner-page/class-data/class-data.component';
import { MoreInfoButtonComponent } from './owner-page/more-info-button/more-info-button.component';
import { AttendanceTableDataComponent } from './owner-page/attendance-table-data/attendance-table-data.component';
import { CommonModule } from '@angular/common';
import { StaffInformationComponent } from './owner-page/staff-information/staff-information.component';
import { NgChartsModule } from 'ng2-charts';
import { PaymentInfoComponent } from './owner-page/payment-info/payment-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentDashboardComponent,
    AccountInfoComponent,
    ReceptionPageComponent,
    TeacherPageComponent,
    OwnerPageComponent,
    AdminPageComponent,
    StudentProfileComponent,
    StudentClassesComponent,
    StudentEnrollComponent,
    StudentPaymentsComponent,
    StudentNotificationComponent,
    MoreInfoButtonComponent,
    AttendanceInfoComponent,
    ClassDataComponent,
    EnrollmentInfoComponent,
    StaffInfoComponent,
    StudentDataComponent,
    StudentInformationComponent,
    SummaryReportComponent,
    TeacherDataComponent,
    AttendanceTableDataComponent,
    StaffInformationComponent,
    PaymentInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgChartsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
