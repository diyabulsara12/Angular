import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }
  print(val:any,cId:any){
    let listItem=document.createElement("li")
    listItem.innerText=val;
    document.getElementById(cId)?.appendChild(listItem)
  }
}
