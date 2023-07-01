import { Component, Input, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'; // Import cell rendering components
import { ICellRendererParams } from 'ag-grid-community';  // Import cell rendering parameters

@Component({
  selector: 'app-attendance-table-data',
  template: `
     <i class="fa-sharp fa-solid fa-circle-check" style="color: #027900; font-size:20px"></i> 
     <i class="fa-sharp fa-solid fa-circle-xmark" style="color: #a50000; font-size:20px"></i>
  `,
  styles: [
  ]
})
export class AttendanceTableDataComponent implements OnInit, ICellRendererAngularComp{

  // get table timestamp row data
  agInit(params: any): void {}

  refresh(): boolean {
    return true;
  }

  ngOnInit(): void {}

  hit():any{
    return "1";
  }

  miss():any{
    return "0";
  }

}
