import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './usercomponent/user/user.component';
import { NgforComponent } from './structuraldirective/ngfor/ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
