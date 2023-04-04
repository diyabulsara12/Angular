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
  show:boolean=true
  language: any;
  quantity: any;
  getProductlistdata(data:any){
    this.id=data.id,
    this.productname=data.productname
    this.price=data.price
    this.avail=data.avail
    this.language=data.language
    this.quantity=data.quantity
    this.show=data.toggle
    

  }
  toggle(){
  this.show=!this.show
  }
  getToggle(data:any){
     this.show=data;
     console.log(data);
     
  }
}
