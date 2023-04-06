import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit,OnChanges {
  condition:boolean=true;
  changeBtn:any="Submit";
 customerForm!:FormGroup;
 @Input() editdata:any;
 @Output() addData= new EventEmitter()
 @Output() updateData= new EventEmitter()
  isToggle:boolean=false;
  @Output() cancelevent= new EventEmitter()
  constructor() { }

  
  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.editdata);
   if(this.editdata){
    this.customerForm.setValue({
      "customername" : this.editdata.customername,
      "description" : this.editdata.description,
      "status" :this.editdata.status ,
      "rate": this.editdata.rate,
      "balance": this.editdata.balance


    })
    this.changeBtn="Update"
    this.condition=false;
   }
   
  }

  ngOnInit(): void {
    this.customerForm =new FormGroup({
      "customername" : new FormControl(null,Validators.required),
      "description" : new FormControl(null,Validators.required),
      "status" : new FormControl(null,Validators.required) ,
      "rate": new FormControl(null,Validators.required),
  })
}

  closeForm(){
    this.cancelevent.emit(this.isToggle)
  }

  addCustomerdata(){
     this.addData.emit(this.customerForm.value)
  }

  updateCustomerdata(){
    this.updateData.emit(this.customerForm.value)
  }
}
