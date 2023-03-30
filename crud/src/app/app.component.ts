import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  id:any;
  productname:any;
  price:any;
  avail:any;
  getProductlistdata(data:any){
    this.id=data.id,
    this.productname=data.productname
    this.price=data.price
    this.avail=data.avail
    

  }
}
