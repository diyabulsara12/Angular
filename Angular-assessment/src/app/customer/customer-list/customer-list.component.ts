import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  {
  public isToggle=true;
 namesearch:string=""
  @Output() showform=new EventEmitter();
  @Input () getCustomer:any;
  @Output() editEvent=new EventEmitter()
  @Output() deleteCustomer=new EventEmitter()

  customerService: any;
  toggleForm(){
    this.showform.emit(this.isToggle);
  }
  deleteCustomerdata(id:any){
    this.deleteCustomer.emit(id);
  }
  togglecustomerwithid(id:any){
    this.showform.emit(this.isToggle)
    this.editEvent.emit(id)
  }
 
}
