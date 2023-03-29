import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
localdata:any;
returndata:any;
parsedata:any;
empid:any;
  constructor() { }
  empdata=[
    {id:"1", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"2", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"3", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"4", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"},
    {id:"5", name:"diya",age:"21" ,dept:'frontend' ,address:"valsad",email:"diya@gmail.com"}
  ]

getData (){
  
  if(localStorage.length==0)
  {
    localStorage.setItem("data",JSON.stringify(this.empdata))
    this.localdata=localStorage.getItem("data")
    return JSON.parse(this.localdata)
  }
  else{
    this.localdata=localStorage.getItem("data")
    return JSON.parse(this.localdata)
  }
}
  myDelete(myId:any){
  this.returndata=localStorage.getItem("data");
  console.log(this.returndata);
  this.parsedata=JSON.parse(this.returndata)
  console.log(this.parsedata);
 this.empid=this.parsedata.find((item: {
    id: any; myId: any; 
}) => item.id==myId)
console.log(this.empdata);
this.parsedata.splice(this.parsedata.indexOf(this.empid),1)
localStorage.setItem("data",JSON.stringify(this.parsedata))
this.localdata=localStorage.getItem("data")
return JSON.parse(this.localdata)
  }
}
