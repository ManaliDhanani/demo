import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product-service/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  products: any[] = [];

  constructor(private productService: ProductService){}
 
  selectedProduct:any;
  productId: number;

  activateRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.productId = +this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.products = this.productService.getProductDetailsArray();
    this.selectedProduct = this.products.find(product => product.id === this.productId);
    console.log(this.selectedProduct);
    
  }

  incCartValue(name:any){
    this.products.forEach(product => {
      if(name == product.name){
        if(product.cart == product.inStock){
          product.cart = product.inStock;
        }else{
          product.cart++;
        }
      }
    })
  }

  decCartValue(name:any){
    this.products.forEach(product => {
      if(name == product.name){
        if(product.cart == 0){
          product.cart = 0;
        }else{
          product.cart--;
        }
      }
    })
  }
}
