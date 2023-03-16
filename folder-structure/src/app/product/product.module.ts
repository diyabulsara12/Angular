import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistingComponent } from './product-list/productlisting/productlisting.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductlistingComponent
  ],
  imports: [
    CommonModule,
    SharedModule 
  ]
})
export class ProductModule { }
