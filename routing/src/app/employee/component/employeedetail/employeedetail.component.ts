import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor( private routes:ActivatedRoute) {}
  empId:any;
  ngOnInit(): void {
    this.empId= this.routes.snapshot.paramMap.get("id");
  }

}
