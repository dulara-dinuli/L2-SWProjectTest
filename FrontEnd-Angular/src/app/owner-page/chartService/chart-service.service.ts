import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Chart } from '../chartInterface/chart';


@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  constructor(private httpclient: HttpClient) {}

  getTypePercentage(): Observable<Array<Chart>> {
    return this.httpclient
      .get(`http://localhost:8080/api/v1/StaffTypeChartData`)
      .pipe(map((d:any= Array<Chart>) => d));
  }

  getStudentGenderPercentage(): Observable<Array<Chart>> {
    return this.httpclient
      .get(`http://localhost:8080/api/v1/StudentGenderChartData`)
      .pipe(map((d:any= Array<Chart>) => d));
  }

  getClassEnrollmentCount(): Observable<Array<Chart>> {
    return this.httpclient
      .get(`http://localhost:8080/api/v1/ClassEnrollmentChartData`)
      .pipe(map((d:any= Array<Chart>) => d));
  }

  getTotalStaffChartData(){
    return this.httpclient.get<number>(`http://localhost:8080/api/v1/TotalStaffChartData`);
  }

  getTotalTeacherChartData(){
    return this.httpclient.get<number>(`http://localhost:8080/api/v1/TotalTeacherChartData`);
  }

  getTotalReceptionistChartData(){
    return this.httpclient.get<number>(`http://localhost:8080/api/v1/TotalReceptionistChartData`);
  }

  getTotalStudentChartData(){
    return this.httpclient.get<number>(`http://localhost:8080/api/v1/TotalStudentChartData`);
  }

  getTotalSubjectChartData(){
    return this.httpclient.get<number>(`http://localhost:8080/api/v1/TotalSubjectChartData`);
  }

  getTotalClassChartData(){
    return this.httpclient.get<number>(`http://localhost:8080/api/v1/TotalClassChartData`);
  }

}
