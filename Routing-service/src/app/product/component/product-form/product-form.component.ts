import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 myId!:any;
 myProduct:any;
  myReactiaveform!:FormGroup;
  buttonText="Submit"
  changeFunction=true

  constructor(private productService:ProductService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.myReactiaveform =new FormGroup({
      "productname" : new FormControl(null,Validators.required),
      "price" : new FormControl(null,Validators.required),
      "avail" : new FormControl(null,Validators.required) 
    })
   this.myId=this.route.snapshot.paramMap.get("id")
   console.log(this.myId);
   
    if (this.myId !== "") {
      this.productService.getProduct(this.myId).subscribe(Response => {
        this.myProduct=Response;
        console.log(this.myProduct);
        this.myReactiaveform.setValue({   "productname" : this.myProduct.productname,
        "price" :  this.myProduct.price,
        "avail" :  this.myProduct.avail})
        
      })
      this.buttonText="Update";
      this.changeFunction=false
    }
  }
  onSubmit(){
    this.productService.postData(this.myReactiaveform.value).subscribe(Response =>console.log("sucess") )
    console.log(this.myReactiaveform.value);
    this.router.navigate(["product-list"])
  }
  onUpdate(){
    this.productService.updateProduct(this.myReactiaveform.value,this.myId).subscribe(Response =>console.log("Data Updated") )
    this.router.navigate(["product-list"])
  }
  

}
