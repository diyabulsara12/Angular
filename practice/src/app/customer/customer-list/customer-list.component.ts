import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  public isToggle:boolean=true;
  @Input () getCustomer:any;

  @Output() formEvent=new EventEmitter()
  @Output() editEvent=new EventEmitter()
  @Output() deleteCustomer=new EventEmitter()
  customerForm: any;
  
  toggleForm(){
    this.formEvent.emit(this.isToggle)
  }
 
  deleteCustomerdata(id:any){
    this.deleteCustomer.emit(id);
  }
  toggleFormwithid(id:any){
    this.formEvent.emit(this.isToggle)
    this.editEvent.emit(id)
   
   
    
  }
 

}
