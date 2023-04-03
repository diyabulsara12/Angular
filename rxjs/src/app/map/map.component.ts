import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map, mergeAll, mergeMap, of } from 'rxjs';
import { UtilityServiceService } from '../shared-service/utility-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 userUnsubscirbe!:Subscription;
 userUnsubscirbe2!:Subscription;
 public data=[{id:1,name:"diya"},{id:1,name:"nupur"},{id:1,name:"mahi"},{id:1,name:"sweta"},{id:1,name:"yashvi"}]
public users =from(this.data)
  constructor( private utilityService:UtilityServiceService) { }

  ngOnInit(): void {
 
  let inetrval=interval(2000)
 this.users.pipe(map(data => this.getData(data.name))).subscribe(res => res.subscribe(data =>  this.utilityService.print(data,'Listcontainer1'))) 

 this.users.pipe(map(data => this.getData(data.name)),mergeAll()).subscribe(res => this.utilityService.print(res,'Listcontainer2'))

 this.users.pipe(mergeMap(data => this.getData(data.name))).subscribe(res =>  this.utilityService.print(res,'Listcontainer3'))
// array

// this.userUnsubscirbe2=this.users.pipe(
//   map(data => data.name)
// ).subscribe(res => {console.log(res)
//   this.utilityService.print(res,'Listcontainer')
//  // setTimeout(this.userUnsubscirbe.unsubscribe,4000)
//  setTimeout(() => {
//   this.userUnsubscirbe2.unsubscribe()
// }, 7000)}

// )
   
  }
  getData(data:any){
    return of (data+" hello");
  }

}
