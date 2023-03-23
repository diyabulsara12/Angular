import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  viewProviders:[EmployeeService]
  
})
export class EmployeeAddComponent implements OnInit {
  myReactiaveform!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myReactiaveform =new FormGroup({
      "username" : new FormControl(null),
      "age" : new FormControl(null),
      "department" : new FormControl(null),
      "add" : new FormControl(null),
      "email" : new FormControl(null)


    }

    )
  }
  onSubmit(){
    console.log(this.myReactiaveform.value);
  
    localStorage.setItem("localdata", JSON.stringify(this.myReactiaveform.value));
    
  }

}
