import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  viewProviders:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
   data:any;
   thead:any=["id",'name',"age","dept","add","email",'Action'];
  constructor(private employeeeservice:EmployeeService) { 
   this.data=this.employeeeservice.empdata;
 
   
  }

  ngOnInit(): void {
    console.log(this.data);
  }


  delete(id:any): void{
    this.employeeeservice.myDelete(Number(id)-1);
    console.log(Number(id)+1);
    
  }



}
