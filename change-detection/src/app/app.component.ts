import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change-detection';
  empName="diya"
  empObj={id:"1" ,name:"nupur"};
  changeName(){
  this.empName="mahi"
  }
  changeObj(){
    this.empObj.name="viren"
  }
}
