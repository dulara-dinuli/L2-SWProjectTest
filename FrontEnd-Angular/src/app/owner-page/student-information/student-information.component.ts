import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component'; 
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams} from 'ag-grid-community';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})

export class StudentInformationComponent implements OnInit{

  private gridApi!: GridApi;

  // Defining columns using AG Grid
  public columnDefs = [
    {headerName: 'Student ID', field: 'studentId', filter: 'agNumberColumnFilter'},
    {headerName: 'Title', field: 'title', filter: 'agTextColumnFilter'},
    {headerName: 'First Name', field: 'firstName', hide: true},
    {headerName: 'Last Name', field: 'lastName', hide: true},
    {headerName: 'Student Name', valueGetter: concatName, filter: 'agTextColumnFilter'},
    {headerName: 'Contact No', field: 'contactNo'},
    {headerName: 'Email', field: 'email', hide: true},
    {headerName: 'Date of Birth', field: 'dob', type:'dateColumn',  filter: 'agDateColumnFilter'},
    {headerName: 'Address', field: 'address'},
    {headerName: 'Parent NIC', field: 'parentNic', filter: 'agNumberColumnFilter', hide: true},
    {headerName: 'More Info', cellRenderer: MoreInfoButtonComponent, 
    cellRendererParams: { data: this }, sortable: false, filter: false}  // Rendering More-Info drop down list
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

constructor() { }

ngOnInit(){
  fetch('http://localhost:8080/api/v1/student')  //Fetch data through the JSON data file
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
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
  return params.data.firstName +' '+ params.data.lastName;
}


