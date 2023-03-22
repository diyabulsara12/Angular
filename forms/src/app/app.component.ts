import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
   @ViewChild('myForm')myForms:NgForm | undefined;
  onSubmit(){
    console.log(this.myForms);
  }
 public data
 ={
    uname:"diya",email:"",contry:""
  }
}

 