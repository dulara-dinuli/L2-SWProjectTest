//Create services to get data through API

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../ModelClass/student';
import { Parent } from '../../ModelClass/parent';
import { ClassInfo } from '../../ModelClass/class-info';
import { Teacher } from '../../ModelClass/teacher';
import { Receptionist } from '../../ModelClass/receptionist';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentBaseURL = "http://localhost:8080/api/v1/student";
  private parentBaseURL = "http://localhost:8080/api/v1/parent";
  private classBaseURL = "http://localhost:8080/api/v1/class";
  private teacherBaseURL = "http://localhost:8080/api/v1/teacher";
  private receptionBaseURL = "http://localhost:8080/api/v1/reception";
 
  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.studentBaseURL}`);
  }

  getStudentById(studentId: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.studentBaseURL}/${studentId}`);
  }

  getParentByNic(parentNic: String): Observable<Parent>{
    return this.httpClient.get<Parent>(`${this.parentBaseURL}/${parentNic}`);
  }

  getClassById(classId: String): Observable<ClassInfo>{
    return this.httpClient.get<ClassInfo>(`${this.classBaseURL}/${classId}`);
  }

  getTeacherById(teacherId: String): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.teacherBaseURL}/${teacherId}`);
  }

  getTeacherList(teacherId: String): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.teacherBaseURL}`);
  }

  
  getReceptionById(receptionId: number): Observable<Receptionist>{
    return this.httpClient.get<Receptionist>(`${this.receptionBaseURL}/${receptionId}`);
  }

  getReceptionList(receptionId: number): Observable<Receptionist>{
    return this.httpClient.get<Receptionist>(`${this.receptionBaseURL}`);
  }


  // createStudent(student: Student): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`, student);
  // }

  // upateStudent(studentId: number, student: Student): Observable<Object>{
  //   return this.httpClient.put (`${this.baseURL}/${studentId}`, student);
  // }

  // deleteStudent(studentId: number): Observable<Object>{
  //   return this.httpClient.delete (`${this.baseURL}/${studentId}`);
  // }

}
