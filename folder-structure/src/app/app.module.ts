import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent],
   
   
  imports:[
    BrowserModule,
    ProductModule,
    SharedModule,
    CoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
