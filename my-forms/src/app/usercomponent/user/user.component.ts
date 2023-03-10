import { Component, OnInit,Input, OnChanges, SimpleChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {
  // private _username:any;
  private _username:any;
  private _dateofbirth:any;
  

  // @Input() name= "";
  // @Input() name:any;
  // @Input() dob:any;
  fname!:string;
  age!:any;
  message!:string;
   date!:string;

  // get name():any{
  //   return this._username
  // }
  //  set name(data)
  //  {
  //   this._username=data.toLowerCase();
  //  }
  @Input() get name(){
    return  this._username;
  }
  set name(data:string){
    this._username=data;
    if(data) {

    }
    this.fname=data.charAt(0).toUpperCase() + data.substring(1).toLowerCase();
  }
  @Input() get dob(){
    return this._dateofbirth;
  }
  set dob (value:any){
    this._dateofbirth=value;
     this.age=this.getAge(value)
  }

  

 @Output()  callParentFunction:EventEmitter<any>= new  EventEmitter<any>()
  constructor() { }
  ngOnInit(): void {
    
  }
  private getAge(dateofbirth:string){
    const dob=new Date(dateofbirth).getTime();
    const currentdate= new Date().getTime();
    return Math.floor((currentdate-dob)/(1000 * 60 *60 *24* 365));

  }
  public onClick(){
    this.callParentFunction.emit({name1:this.name,dateofbirth:this.dob})
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ngonChanges", this.name);
    
  // }

 
}
