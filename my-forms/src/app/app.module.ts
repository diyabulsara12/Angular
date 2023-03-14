import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './usercomponent/user/user.component';
import { NgforComponent } from './structuraldirective/ngfor/ngfor.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PipeComponent } from './pipe/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NgforComponent,
    FilterPipe,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
