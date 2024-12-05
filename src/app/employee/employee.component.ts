import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employeeId:number=101;
  employeeName:string="rahul";
  employeeAge:number=22;

  title="Employee Details - Data Binding using various Directives"

  isManager:boolean=true;

  //array
  skills:string[]=['JavaScript','Angular','TypeScript'];

  //enum
  Position:PositionType=PositionType.SeniorDeveloper;

  //object
  address:{street:string,city:string,postalCode:number}={
    street:'main street',
    city:'bangalore',
    postalCode:10001
  };

  //any data type
  extraInfo:any='additional employee info';

  //event Binding-handling method
  message:string='';

  //two way data binding
  employeePosition:string='software engineer';

  //event Binding Method
  hello():void{
    this.message="hello fron event Binding in Angular by - "+this.employeeName;
  }
  clear():void{
    this.message='';
  }
  toggleManagerStatus():void{
    this.isManager=!this.isManager;
  }
  //property Binding-one way binding
  username:string='James Gosling';
  info:string='property Binding-one way binding';

  updateUserName(){
    this.username='Jhon dew';
  
  }
  convertToDate(){
    const date=new Date();
    return date.toLocaleDateString();
  }
  add(){
    return 10+50;
  }
}

//Enum for position Type
enum PositionType{
  JuniorDeveloper,
  SeniorDeveloper,
  TeamLead
}
