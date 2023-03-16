import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { ProductModule } from './product/product.module';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';





@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
