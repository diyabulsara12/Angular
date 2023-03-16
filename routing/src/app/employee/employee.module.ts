import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeedetailComponent } from './component/employeedetail/employeedetail.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';


@NgModule({
  declarations: [
    
    EmployeedetailComponent,
    EmployeelistComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
