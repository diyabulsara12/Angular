import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }
  productId:any;
 
  ngOnInit(): void {

    this.productId=this.route.snapshot.paramMap.get("id");
   
  }

  

}
