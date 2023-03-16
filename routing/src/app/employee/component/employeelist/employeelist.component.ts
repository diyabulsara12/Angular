import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee=[
    {id:1, name:"viren"},
      {id:2, name:"nupur"},
      {id:3, name:"mahi"},
      ];
  


}
