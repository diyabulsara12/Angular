import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedDays:boolean=true;
  selectItem:any;
  color:boolean=true;
  selectColor:boolean=true;
  changestyle:boolean=true;
  namesearch:string="";

  getWeekdays(val:any){
    console.log(val.target.value);
    
    this.selectedDays=val.target.value;
    

  }
  getColor()
  {
    return { 'font-size.px':20 ,'color':'green'    }

  }
  // addStyle(){
  //   this.myClasses['color']=true,
  //   this.myClasses['border']=true;

  // }
  myClasses={
    color:false,
    container:true,
    font:true
  };
  changeShape(){
    this.myClasses.color=!this.myClasses.color;
    this.myClasses.container=!this.myClasses.container;
  }
  myStyle={
    'font-size.px':20 ,'color':'blue' }

  getStyle(){
   return { color:'red'}
  }
  getStyle2(){
    return { color:'blue'}
  }
  MyClass={ " container " : this.selectColor ,
  "color " : this.selectColor}
  




  headers=["id","name","email","phno","Action"];
  person:any=[
    {id:1,name:"Diya",email:"diya@gmail.com",phno:1234567890,Valid:true},
    {id:1,name:"Meha",email:"meha@gmail.com",phno:990425641,Valid:false},
    {id:1,name:"nupur",email:"nupur@gmail.com",phno:8596547851,Valid:true},
    {id:1,name:"Mahi",email:"diya@gmail.com",phno:9966585478,Valid:false}
  ]

}

