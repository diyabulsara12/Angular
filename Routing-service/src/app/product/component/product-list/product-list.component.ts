import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  data:any;
  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(Response => this.data=Response
    )
  }
  addProduct(){
    this.router.navigate(["product-form",""])
  }
  deleteProduct(id:any){
    this.productService.deleteData(id).subscribe(Response =>Response)
    this.productService.getData().subscribe(Response => this.data=Response
   )
}
  navigate(id:any){
    this.router.navigate(["product-form",id])
  }
}
