import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    CustomerFormComponent,
    CustomerListComponent,
    CustomerComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
