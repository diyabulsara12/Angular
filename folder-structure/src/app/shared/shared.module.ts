import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { ProductDirective } from './directives/product.directive';



@NgModule({
  declarations: [
    FilterpipePipe,
    SearchpipePipe,
    ProductDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    FilterpipePipe
  ]
})
export class SharedModule { }
