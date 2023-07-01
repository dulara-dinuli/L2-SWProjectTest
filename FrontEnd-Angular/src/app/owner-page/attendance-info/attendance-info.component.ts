import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../StudentService/student.service';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Location, NgIf, WeekDay } from '@angular/common';
import { GridApi,GridReadyEvent, ValueGetterParams, PaginationNumberFormatterParams, ColDef, ColGroupDef} from 'ag-grid-community';
import { AttendanceTableDataComponent } from '../attendance-table-data/attendance-table-data.component';
import { Student } from 'src/app/ModelClass/student';

@Component({
  selector: 'app-attendance-info',
  templateUrl: './attendance-info.component.html',
  styleUrls: ['./attendance-info.component.css']
})
export class AttendanceInfoComponent implements OnInit{

  studentId!: number
  student!: Student
  classId!: String
  year!: number
  value!: any
  // attendanceTableData= new AttendanceTableDataComponent();

  private gridApi!: GridApi;

  // Defining columns using AG Grid
  public columnDefs:(ColDef | ColGroupDef)[] = [
    {headerName: 'Week', field: 'week', pinned: 'left'},
    {
      headerName: 'Month', 
      children: [ 
        // { headerName: 'January', field: 'january', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this}, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'February', field: 'february', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'March', field: 'march', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'April', field: 'april', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'May', field: 'may', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'June', field: 'june', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'July', field: 'july', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'Augest', field: 'augest', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'September', field: 'september', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'October', field: 'october', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'November', field: 'november', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'December', field: 'december', cellRenderer: AttendanceTableDataComponent, cellRendererParams: { data: this }, cellStyle: { 'text-align': 'center' } },

        { headerName: 'January', field: 'january',cellStyle: { 'text-align': 'center' } },
        { headerName: 'February', field: 'february',cellStyle: { 'text-align': 'center' } },
        { headerName: 'March', field: 'march', cellStyle: { 'text-align': 'center' } },
        { headerName: 'April', field: 'april', cellStyle: { 'text-align': 'center' } },
        { headerName: 'May', field: 'may', cellStyle: { 'text-align': 'center' } },
        { headerName: 'June', field: 'june', cellStyle: { 'text-align': 'center' } },
        { headerName: 'July', field: 'july', cellStyle: { 'text-align': 'center' } },
        { headerName: 'Augest', field: 'augest', cellStyle: { 'text-align': 'center' } },
        { headerName: 'September', field: 'september', cellStyle: { 'text-align': 'center' } },
        { headerName: 'October', field: 'october', cellStyle: { 'text-align': 'center' } },
        { headerName: 'November', field: 'november', cellStyle: { 'text-align': 'center' } },
        { headerName: 'December', field: 'december', cellStyle: { 'text-align': 'center' } },

        // { headerName: 'January', field: 'january', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'February', field: 'february', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'March', field: 'march', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'April', field: 'april', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'May', field: 'may', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'June', field: 'june', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'July', field: 'july', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'Augest', field: 'augest', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'September', field: 'september', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'October', field: 'october', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'November', field: 'november', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
        // { headerName: 'December', field: 'december', cellRenderer: AttendanceTableDataComponent, cellStyle: { 'text-align': 'center' } },
      ],
    },
    {headerName: 'Year', field: 'year', hide: true},
  ];

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api; //Getting parameters through Grid API
  }

  // Method to change the table data according to the select inputs
  valueChanged() {
      this.year = parseInt((document.getElementById('filterYearBoxSize') as HTMLInputElement).value);
      this.classId=(document.getElementById('filterClassBoxSize') as HTMLInputElement).value;
      this.tableChanged();
  }

  rowData! : any [];
  classIdList! : any [];
  yearList! : any [];
  rowHeight = 50;
  attendanceMark: string[][] = [];

  constructor(private route: ActivatedRoute, private attendanceService: StudentService, private _location: Location) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params["studentId"];
    this.attendanceService.getStudentById(this.studentId).subscribe(data => {
      this.student = data;
    });
   
    interface StudentClass {
      studentId: number;
      classId: string;
    }


  fetch('http://localhost:8080/api/v1/enrollment')
  .then(result => result.json())
  .then(classData => {
    const filteredClassData = classData.filter((obj: { studentId: number; classId: string; }) => obj.studentId === this.student.studentId);
    if (filteredClassData.length > 0) {
      this.classIdList = filteredClassData.map((obj: { classId: string; }) => obj.classId);
      this.classId = this.classIdList[0];
      this.tableChanged();
    }
  });

  fetch('http://localhost:8080/api/v1/attendance')
  .then(result => result.json())
  .then(yearData => {
    const filteredYearData = yearData.filter((obj: { studentClassId: StudentClass; year: number; }) => obj.studentClassId.studentId === this.student.studentId);
    if (filteredYearData.length > 0) {
      const yearSet = new Set(filteredYearData.map((obj: { year: number; }) => obj.year));
      this.yearList = [...yearSet]; // spread the set to convert it into an array
      this.year = this.yearList[0];
    }
  });

this.tableChanged();
  

  }

  //customizze AG Grid Columns
defaultColDef = { 
  sortable: false,    
  filter: false,
  unSortIcon: false,
  suppressMovable:true,
};

// Method to change the table data according to the select inputs
tableChanged(){
  interface StudentClass {
    studentId: number;
    classId: string;
  }

  fetch('http://localhost:8080/api/v1/attendanceArray/'+this.student.studentId+'/'+this.classId)  //Fetch data through the attendance JSON data file
  
  // fetch('http://localhost:8080/api/v1/attendance')  //Fetch data through the attendance JSON data file
    .then(result => result.json())
    .then(rowData => {
      const filteredData = rowData;
      this.attendanceMark = filteredData; 

      // const filteredData = rowData.filter((obj: { studentClassId: StudentClass; year: number}) => 
      // obj.studentClassId.studentId == this.student.studentId && obj.studentClassId.classId == this.classId && obj.year == this.year);      
      // this.rowData = filteredData;

    // Define row data
    this.rowData = [
      // { week: 'Week 01', january:this.attendanceMark[0][0], february:this.attendanceMark[1][0], march:this.attendanceMark[2][0], april:this.attendanceMark[3][0], 
      //                    may:this.attendanceMark[4][0], june:this.attendanceMark[5][0], july:this.attendanceMark[6][0], augest:this.attendanceMark[7][0], 
      //                    september:this.attendanceMark[8][0], october:this.attendanceMark[9][0], november:this.attendanceMark[10][0], december:this.attendanceMark[11][0]
      // },

      // { week: 'Week 02', january:this.attendanceMark[0][1], february:this.attendanceMark[1][1], march:this.attendanceMark[2][1], april:this.attendanceMark[3][1], 
      // may:this.attendanceMark[4][1], june:this.attendanceMark[5][1], july:this.attendanceMark[6][1], augest:this.attendanceMark[7][1], 
      // september:this.attendanceMark[8][1], october:this.attendanceMark[9][1], november:this.attendanceMark[10][1], december:this.attendanceMark[11][1]
      // },

      // { week: 'Week 03', january:this.attendanceMark[0][2], february:this.attendanceMark[1][2], march:this.attendanceMark[2][2], april:this.attendanceMark[3][2], 
      //                    may:this.attendanceMark[4][2], june:this.attendanceMark[5][2], july:this.attendanceMark[6][2], augest:this.attendanceMark[7][2], 
      //                    september:this.attendanceMark[8][2], october:this.attendanceMark[9][2], november:this.attendanceMark[10][2], december:this.attendanceMark[11][2]
      // },

      // { week: 'Week 04', january:this.attendanceMark[0][3], february:this.attendanceMark[1][3], march:this.attendanceMark[2][3], april:this.attendanceMark[3][3], 
      //                    may:this.attendanceMark[4][3], june:this.attendanceMark[5][3], july:this.attendanceMark[6][3], augest:this.attendanceMark[7][3], 
      //                    september:this.attendanceMark[8][3], october:this.attendanceMark[9][3], november:this.attendanceMark[10][3], december:this.attendanceMark[11][3]
      // },

      { week: 'Week 01', january:this.icon(this.attendanceMark[0][0]), february:this.icon(this.attendanceMark[1][0]), march:this.icon(this.attendanceMark[2][0]), april:this.icon(this.attendanceMark[3][0]), 
      may:this.icon(this.attendanceMark[4][0]), june:this.icon(this.attendanceMark[5][0]), july:this.icon(this.attendanceMark[6][0]), augest:this.icon(this.attendanceMark[7][0]), 
      september:this.icon(this.attendanceMark[8][0]), october:this.icon(this.attendanceMark[9][0]), november:this.icon(this.attendanceMark[10][0]), december:this.icon(this.attendanceMark[11][0])      
      },

      { week: 'Week 02', january:this.icon(this.attendanceMark[0][1]), february:this.icon(this.attendanceMark[1][1]), march:this.icon(this.attendanceMark[2][1]), april:this.icon(this.attendanceMark[3][1]), 
      may:this.icon(this.attendanceMark[4][1]), june:this.icon(this.attendanceMark[5][1]), july:this.icon(this.attendanceMark[6][1]), augest:this.icon(this.attendanceMark[7][1]), 
      september:this.icon(this.attendanceMark[8][1]), october:this.icon(this.attendanceMark[9][1]), november:this.icon(this.attendanceMark[10][1]), december:this.icon(this.attendanceMark[11][1])
      },

      { week: 'Week 03', january:this.icon(this.attendanceMark[0][2]), february:this.icon(this.attendanceMark[1][2]), march:this.icon(this.attendanceMark[2][2]), april:this.icon(this.attendanceMark[3][2]), 
            may:this.icon(this.attendanceMark[4][2]), june:this.icon(this.attendanceMark[5][2]), july:this.icon(this.attendanceMark[6][2]), augest:this.icon(this.attendanceMark[7][2]), 
            september:this.icon(this.attendanceMark[8][2]), october:this.icon(this.attendanceMark[9][2]), november:this.icon(this.attendanceMark[10][2]), december:this.icon(this.attendanceMark[11][2])
      },

      { week: 'Week 04', january:this.icon(this.attendanceMark[0][3]), february:this.icon(this.attendanceMark[1][3]), march:this.icon(this.attendanceMark[2][3]), april:this.icon(this.attendanceMark[3][3]), 
            may:this.icon(this.attendanceMark[4][3]), june:this.icon(this.attendanceMark[5][3]), july:this.icon(this.attendanceMark[6][3]), augest:this.icon(this.attendanceMark[7][3]), 
            september:this.icon(this.attendanceMark[8][3]), october:this.icon(this.attendanceMark[9][3]), november:this.icon(this.attendanceMark[10][3]), december:this.icon(this.attendanceMark[11][3])
      },

  ];

    });
}

  //Go to the previous page
  previousPage() {
    this._location.back();
  }

  icon(value: any): any{

    this.value=value;
    if (this.value == 1) {
      // return this.attendanceTableData.hit();
      return "1";
    } 
    else if (this.value == 0) {
      // return this.attendanceTableData.miss();
      return "0";
    }
  }

}
