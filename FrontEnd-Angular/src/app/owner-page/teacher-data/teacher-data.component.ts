import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../StudentService/student.service';
import { Location } from '@angular/common';
import { Teacher } from '../../ModelClass/teacher';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { MoreInfoButtonComponent } from '../more-info-button/more-info-button.component'; 
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams} from 'ag-grid-community';


@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent implements OnInit{

  teacherId!: String
  teacherInfo!: Teacher

  private gridApi!: GridApi;

  constructor(private route: ActivatedRoute, private teacherService: StudentService, private _location: Location) {} 

 // Defining columns using AG Grid
 public columnDefs = [
  {headerName: 'Class ID', field: 'classId', flex: 2},
  {headerName: 'Subject', field: 'subject',flex: 2},
  {headerName: 'Grade', field: 'grade', flex: 2},
  {headerName: 'More Info', cellRenderer: MoreInfoButtonComponent, 
  cellRendererParams: { data: this }, sortable: false, filter: false, flex: 1} // Rendering More-Info drop down list
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
classData!: any[];

  //Get the classId as the parameter and show the relavent content
  ngOnInit(): void {
    this.teacherId = this.route.snapshot.params["teacherId"];
    this.teacherService.getTeacherById(this.teacherId).subscribe(data => {
      this.teacherInfo = data;
    });
    
    fetch('http://localhost:8080/api/v1/class')  //Fetch data through the class JSON data file
      .then(result => result.json())
      .then(rowData => {
        const filteredData = rowData.filter ((obj: { teacherId: String; })=> obj.teacherId == this.teacherInfo.teacherId);
        this.rowData = filteredData;
        });
      }
          //customizze AG Grid Columns
defaultColDef = { 
  sortable: false,
  filter: false
};

  //Go to the previous page
  previousPage() {
    this._location.back();
  }

}