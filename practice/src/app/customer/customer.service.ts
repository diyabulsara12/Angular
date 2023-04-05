import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  getCutomer(){
    return this.http.get("http://localhost:3000/customer")
  }
  addCustomer(body:any){
    return this.http.post("http://localhost:3000/customer", 
    body)
  }
  deleteCustomer(id:any){
    return this.http.delete(`http://localhost:3000/customer/${id}`)
  }

  getCustomerByid(id:any){
    return this.http.get(`http://localhost:3000/customer/${id}`)
  }
  updateCustomer(id:any,body:any){
    return this.http.put(`http://localhost:3000/customer/${id}`,body)
  }
  }

  







