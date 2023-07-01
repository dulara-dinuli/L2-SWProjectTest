import { Component } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {

  activeComponent: string = "dashboard";

  selectedComponent(component: string){
    this.activeComponent=component;
  }
}
