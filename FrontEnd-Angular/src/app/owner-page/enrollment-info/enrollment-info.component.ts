import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../StudentService/student.service';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Location } from '@angular/common';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component'; 
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams} from 'ag-grid-community';
import { Student } from 'src/app/ModelClass/student';

@Component({
  selector: 'app-enrollment-info',
  templateUrl: './enrollment-info.component.html',
  styleUrls: ['./enrollment-info.component.css']
})
export class EnrollmentInfoComponent implements OnInit{
  studentId!: number
  student!: Student
  private gridApi!: GridApi;

  // Defining columns using AG Grid
  public columnDefs = [
    {headerName: 'Enrollment ID', field: 'enrollmentId'},
    {headerName: 'Class ID', field: 'classId'},
    {headerName: 'Teacher ID', field: 'teacherId'},
    {headerName: 'Teacher Name', valueGetter: concatName, filter: 'agTextColumnFilter'},
    {headerName: 'Subject', field: 'classSubject', filter: 'agTextColumnFilter' },
    {headerName: 'Grade', field: 'classGrade', filter: 'agNumberColumnFilter'},
    {headerName: 'More Info', cellRenderer: MoreInfoButtonComponent, 
    cellRendererParams: { data: this }, sortable: false, filter: false} // Rendering More-Info drop down list
  ];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; //Getting parameters through Grid API
  }

  // Method to change the table data according to the search bar inputs
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('searchFeature') as HTMLInputElement).value
    );
  }

  rowData! : any [];
  rowHeight = 50;
  paginationPageSize = 5;
  enrollmentData! : any[];
  classData!: any[];

  constructor(private route: ActivatedRoute, private studentService: StudentService, private _location: Location) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params["studentId"];
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    });
    
    fetch('http://localhost:8080/api/v1/enrollment')  //Fetch data through the enrollment JSON data file
      .then(result => result.json())
      .then(rowData => {
        const filteredData = rowData.filter ((obj: { studentId: number; })=> obj.studentId == this.student.studentId);
        this.rowData = filteredData;
        });
  }

  //customizze AG Grid Columns
defaultColDef = { 
  sortable: true,
  filter: true,
  unSortIcon: true,
  suppressMovable:true,
};

public paginationNumberFormatter: (
  params: PaginationNumberFormatterParams
) => string = (params: PaginationNumberFormatterParams) => {
  return '[' + params.value.toLocaleString() + ']';
};

onPageSizeChanged() {
  var value = (document.getElementById('pageSize') as HTMLInputElement).value;
  this.gridApi.paginationSetPageSize(Number(value));
}

  //Go to the previous page
  previousPage() {
    this._location.back();
  }

}

function concatName(params: ValueGetterParams) {
  return params.data.teacherFirstName +' '+ params.data.teacherLastName;
}

