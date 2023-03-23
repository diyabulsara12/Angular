import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
localdata:any;
  constructor() { }
  empdata=[
    {id:"1", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"2", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"3", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"4", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"5", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"}
  ]

  myDelete(myId:any){
    this.empdata.splice(myId,1);
  // console.log(myId);
  }
}
