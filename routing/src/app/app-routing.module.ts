import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './core/auth.service';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { ProductlistComponent } from './product/productlist/productlist.component';

const routes: Routes = [
  {path:"" , redirectTo:'product-list', pathMatch:'full'},
  {path:'product-list' , component:ProductlistComponent,canActivate:[ AuthService]},
  {path:'product-detail/:id' , component:ProductdetailComponent},
  {path:"product" , loadChildren:() => import('./product/product.module').then(Response => Response.ProductModule)},

  {path:"employee" , loadChildren:() => import('./employee/employee.module').then(Response => Response.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
