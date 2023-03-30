import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit,OnChanges {
  @Input () id:any
  @Input () productname:any
  @Input () price:any
  @Input () avail:any
  myId!:any;
  myProduct:any;
  myReactiaveform!:FormGroup;
  buttonText="Submit"
  changeFunction=true
  http: any;
  // data: Object;

  constructor(private productService:ProductService,private router:Router,
    private route:ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.id !== undefined) {
    
      this.myReactiaveform.setValue({  
     "productname" : this.productname,
      "price" :  this.price,
      "avail" :  this.avail})
      this.buttonText="Update";
    this.changeFunction=false 
    }
   
  }
  
  

  ngOnInit(): void {
    this.myReactiaveform =new FormGroup({
      "productname" : new FormControl(null,Validators.required),
      "price" : new FormControl(null,Validators.required),
      "avail" : new FormControl(null,Validators.required) 
    })
  
    
  }
  onSubmit(){
    this.productService.postData(this.myReactiaveform.value).subscribe(Response =>console.log("sucess") )
    console.log(this.myReactiaveform.value);
    this.http.get("http://localhost:3000/product")
    
   
  
  }
  onUpdate(){
    this.productService.updateProduct(this.id,this.myReactiaveform.value).subscribe(Response => Response )
  }
  

}
