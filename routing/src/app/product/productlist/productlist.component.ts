import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product=[
  {id:1, name:"laptop"},
    {id:2, name:"mobilephone"},
    {id:3, name:"tablet"},
    ];

}
