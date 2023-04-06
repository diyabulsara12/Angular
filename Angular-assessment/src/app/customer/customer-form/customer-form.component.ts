import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit,OnChanges {
  isToggle=false;
  condition:boolean=true;
  changeBtn:any="Submit";
  @Output() hideForm= new EventEmitter()
  @Output() addData= new EventEmitter()
  @Output() updateData= new EventEmitter()
  @Input() editcustomer:any;
  customerForm!:FormGroup;
  status=[{id:1,name:"Open"},{id:2,name:"Success"},{id:3,name:"Error"},{id:4,name:"Inactive"}
]

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.editcustomer);
    if(this.editcustomer){
     this.customerForm.setValue({
       "customername" : this.editcustomer.customername,
       "description" : this.editcustomer.description,
       "status" :this.editcustomer.status ,
       "rate": this.editcustomer.rate,
       "balance": this.editcustomer.balance
 
     })
     this.changeBtn="Update"
     this.condition=false;
    }
    
   }
  ngOnInit(): void {
    this.customerForm =new FormGroup({
      "customername" : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      "description" : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
      "status" : new FormControl(null,[Validators.required]) ,
      "rate": new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")] ),
      "balance": new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")])
  })
  }
  closeForm(){
    this.hideForm.emit(this.isToggle)
  }
  addCustomerdata(){
    this.addData.emit(this.customerForm.value)
 }
 updateCustomerdata(){
  this.updateData.emit(this.customerForm.value)
}


}
