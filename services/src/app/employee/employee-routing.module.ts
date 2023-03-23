import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';

const routes: Routes = [{path:"",redirectTo:"employee-list",pathMatch:'full'},
{path:'employee-list', component:EmployeeListComponent},
{path:'employee-add' ,component:EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
