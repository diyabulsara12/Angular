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
    'font-size.px':20 ,'color':'blue' 
  }
  getStyle(){
    this.myStyle['color']='red'
  }

  headers=["Index","id","name","email","phno","Action"];
  person=[
    {id:1,name:"Diya",email:"diya@gmail.com",phno:1234567890,Valid:true},
    {id:1,name:"Diya",email:"diya@gmail.com",phno:1234567890,Valid:false},
    {id:1,name:"Diya",email:"diya@gmail.com",phno:1234567890,Valid:true},
    {id:1,name:"Diya",email:"diya@gmail.com",phno:1234567890,Valid:false}
  ]

}
