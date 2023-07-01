import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component'; 
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams} from 'ag-grid-community';


@Component({
  selector: 'app-staff-information',
  templateUrl: './staff-information.component.html',
  styleUrls: ['./staff-information.component.css']
})

export class StaffInformationComponent implements OnInit{

  private gridApi!: GridApi;

  // Defining columns using AG Grid
  public columnDefs = [
    {headerName: 'Staff ID', valueGetter: staffId, filter: 'agTextColumnFilter', flex:2},
    {headerName: 'First Name', field: 'firstName', hide: true, flex:3},
    {headerName: 'Last Name', field: 'lastName', hide: true, flex:3},
    {headerName: 'Full Name', valueGetter: concatName, filter: 'agTextColumnFilter', flex:3},
    {headerName: 'Contact No', field: 'telNo', flex:3},
    {headerName: 'Email', field: 'email', flex:3},
    {headerName: 'Address', field: 'address', flex:3},
    {headerName: 'NIC', field: 'nic', filter: 'agNumberColumnFilter', hide: true, flex:3},
    {headerName: 'More Info', cellRenderer: MoreInfoButtonComponent, 
    cellRendererParams: { data: this }, sortable: false, filter: false, flex:2}  // Rendering More-Info drop down list
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
  this.showStaffData()
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

showStaffData(){
  var value = (document.getElementById('showStaffData') as HTMLInputElement).value;
  if(value=="teacher"){
    fetch('http://localhost:8080/api/v1/teacher')  //Fetch data through the JSON data file
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }
  else if(value=="receptionist"){
    fetch('http://localhost:8080/api/v1/reception')  //Fetch data through the JSON data file
    .then(result => result.json())
    .then(rowData => this.rowData = rowData);
  }
}

}

function concatName(params: ValueGetterParams) {
  return params.data.firstName +' '+ params.data.lastName;
}

function staffId(params: ValueGetterParams){
  var value = (document.getElementById('showStaffData') as HTMLInputElement).value;
  if(value=="teacher"){
    return params.data.teacherId;
  }
  else if(value=="receptionist"){
    return params.data.receptionId;
  }
}


