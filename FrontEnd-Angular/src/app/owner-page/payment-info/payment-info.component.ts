import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Location } from '@angular/common';
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams} from 'ag-grid-community';
import { StudentService } from '../StudentService/student.service';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component';


@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit{

  private gridApi!: GridApi;

  // Defining columns using AG Grid
  public columnDefs = [
    {headerName: 'Payment ID', field: 'paymentId'},
    {headerName: 'Student ID', field: 'studentId'},
    {headerName: 'Student Name', valueGetter: concatName, filter: 'agTextColumnFilter'},
    {headerName: 'Class ID', field: 'classId'},
    {headerName: 'Subject', field: 'classSubject', filter: 'agTextColumnFilter' },
    {headerName: 'Teacher Name', valueGetter: concatTeacherName, filter: 'agTextColumnFilter'},
    {headerName: 'Class Fee', field: 'classMonthlyFee', filter: 'agNumberColumnFilter'},
    {headerName: 'Paid Date', field: 'paidDate', filter: 'agNumberColumnFilter'},
    {headerName: 'For Month', field: 'month', filter: 'agNumberColumnFilter'},
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


  constructor(private route: ActivatedRoute, private studentService: StudentService, private _location: Location) {}

  ngOnInit(): void {
  
    fetch('http://localhost:8080/api/v1/payment')  //Fetch data through the enrollment JSON data file
      .then(result => result.json())
      .then(rowData => {
        this.rowData = rowData;
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

}

function concatName(params: ValueGetterParams) {
  return params.data.studentFirstName +' '+ params.data.studentLastName;
}
function concatTeacherName(params: ValueGetterParams) {
  return params.data.teacherFirstName +' '+ params.data.teacherLastName;
}