import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public isToggle=false;
  show:boolean=true
  public getCustomer: any;
  public customerForm: any;
  public editcustomer:any;
  public id:any;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerdata();
  }

  toggleForm(data:any){
    this.isToggle=data;
  }
  cancelForm(data:any){
    this.isToggle=data;
  }
  toggle(){
    this.show=!this.show
    }

    getCustomerdata(){
      this.customerService.getCutomer().subscribe((response:any) => {
        this.getCustomer=response})
      }
      
    addCustomerdata(data:any){
      this.customerService.addCustomer(data).subscribe( (res)=>console.log("sucess") )
      this.getCustomerdata();
     }
     deleteCustomerdata(id:number){
       this.customerService.deleteCustomer(id).subscribe(response=>response)
       this.getCustomerdata();
     }
     getCustomerbyIdData(data:any){
      console.log(data);
      this.id=data
      this.customerService.getCustomerByid(data).subscribe(res => this.editcustomer=res
        
      )
    }
    updateCustomerdata(body:any){
      this.customerService.updateCustomer(this.id,body).subscribe(res => res)
      this.getCustomerdata();
    }
   


  
}
