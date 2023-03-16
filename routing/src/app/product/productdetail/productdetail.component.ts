import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }
  userId:any;

  ngOnInit(): void {

    this.userId=this.route.snapshot.paramMap.get("id");
    
  }

  

}
