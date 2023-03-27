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
    // this.data=this.employeeeservice.empdata;
 
   
  }

  ngOnInit(): void {
    
    this.data=this.employeeeservice.getData();
  }


  delete(id:any): void{
    this.employeeeservice.myDelete(id);
    this.data=this.employeeeservice.getData();
 
    
  }



}
