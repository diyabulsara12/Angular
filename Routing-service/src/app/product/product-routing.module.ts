import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [ { path:"" ,redirectTo:"product-list", pathMatch:"full"},
{path: 'product-list', component:ProductListComponent
},
{path: 'product-form/:id', component:ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
