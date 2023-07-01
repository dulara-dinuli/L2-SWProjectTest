import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartOptions, ChartType, Color } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { ChartServiceService } from '../chartService/chart-service.service';
import { Chart } from '../chartInterface/chart';


@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class SummaryReportComponent implements OnInit{

  totalStaff!:number;
  totalStudent!:number;
  totalSubject!:number;
  totalClass!:number;
  totalTeacher!:number;
  totalReceptionist!:number;

  constructor(private chartService:ChartServiceService){}

  ngOnInit(): void {
    
    this.getTypePercentage(); 

    this.chartService.getTotalStaffChartData().subscribe((d)=>{
      console.log(d);
      this.totalStaff = d;
    }, error => {console.error(error);})

    this.chartService.getTotalStudentChartData().subscribe((d)=>{
      console.log(d);
      this.totalStudent = d;
    }, error => {console.error(error);})

    this.chartService.getTotalSubjectChartData().subscribe((d)=>{
      console.log(d);
      this.totalSubject = d;
    }, error => {console.error(error);})

    this.chartService.getTotalClassChartData().subscribe((d)=>{
      console.log(d);
      this.totalClass = d;
    }, error => {console.error(error);})

    this.chartService.getTotalTeacherChartData().subscribe((d)=>{
      console.log(d);
      this.totalTeacher = d;
    }, error => {console.error(error);})

    this.chartService.getTotalReceptionistChartData().subscribe((d)=>{
      console.log(d);
      this.totalReceptionist = d;
    }, error => {console.error(error);})
    
  
  
  }

  // Doughnut1
  public doughnutChartLabels: String[] = ['Teacher','Receptionist'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [],
        backgroundColor: ['#005a11', '#efff08'] },]};

  public typeData: Array<Chart> = [];
  public doughnutChartType: ChartType = 'doughnut';

   // Doughnut2
   public doughnutChartLabels1: String[] = ['Male','Female'];
   public doughnutChartData1: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels1,
     datasets: [
       { data: [],
         backgroundColor: ['#08bdff', '#ff08a9'] },]};
 

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);}

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);}

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true};


    public barChartLegend = true;
    public barChartPlugins = [];
  
    public barChartData: ChartConfiguration<'bar'>['data'] = {
      labels: [],
      datasets: [
        { data: [], 
          label: 'Enrollment',
          backgroundColor: ['#ffbb00'] },
      ]
    };
  
    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: true,
      maintainAspectRatio: true,
    };
  


  getTypePercentage(){
      this.chartService.getTypePercentage().subscribe((d:Chart[])=>{
          console.log(d);
          d.forEach((type: Chart) => {
            console.log(type);
            this.doughnutChartData.datasets[0].data = d.map((type: Chart) => type.count);
            this.doughnutChartLabels = d.map((type: Chart) => type.type);});
      }, error => {console.error(error);})

      this.chartService.getStudentGenderPercentage().subscribe((d:Chart[])=>{
        console.log(d);
        d.forEach((type: Chart) => {
          console.log(type);
          this.doughnutChartData1.datasets[0].data = d.map((type: Chart) => type.count);
          this.doughnutChartLabels1 = d.map((type: Chart) => type.type);});
    }, error => {console.error(error);})

    this.chartService.getClassEnrollmentCount().subscribe((d:Chart[])=>{
      console.log(d);
      d.forEach((type: Chart) => {
        this.barChartData.datasets[0].data.push(type.count);
        this.barChartData.labels =  d.map((type: Chart) => type.type);
        console.log(type);});
  }, error => {console.error(error);})
  }

}
