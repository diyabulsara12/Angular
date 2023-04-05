import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class CustomerModule { }
