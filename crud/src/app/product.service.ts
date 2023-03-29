import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://localhost:3000/product")
  }
  postData(body:any){
    return this.http.post("http://localhost:3000/product", 
    body)
  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  getProduct(id:any){
    return this.http.get(`http://localhost:3000/product/${id}`)
  }
  updateProduct(body:any,id:any){
   return this.http.put(`http://localhost:3000/product/${id}`,body)
  }
  }