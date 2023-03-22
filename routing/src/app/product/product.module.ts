import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ProductModule { }
