import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"employee", loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
{path:"product", loadChildren: () => import('./product/product.module').then(m => m.ProductModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
