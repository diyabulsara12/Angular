import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  namesearch:string="";

  constructor() { }

  ngOnInit(): void {
  }
  headers=["id","name","email","phno","Action"];
  person:any=[
    {id:1,name:"Diya",email:"diya@gmail.com",phno:1234567890,Valid:true},
    {id:1,name:"Meha",email:"meha@gmail.com",phno:990425641,Valid:false},
    {id:1,name:"nupur",email:"nupur@gmail.com",phno:8596547851,Valid:true},
    {id:1,name:"Mahi",email:"diya@gmail.com",phno:9966585478,Valid:false}
  ]
}
