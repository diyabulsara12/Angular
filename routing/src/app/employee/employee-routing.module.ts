import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { EmployeedetailComponent } from './component/employeedetail/employeedetail.component';
import { EmployeelistComponent } from './component/employeelist/employeelist.component';

const routes: Routes = [ {path:"" , redirectTo:'employee-list', pathMatch:'full'},
{path:'employee-list' , component:EmployeelistComponent,canActivate:[ AuthService]},
{path:'employee-detail/:id' , component:EmployeedetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
