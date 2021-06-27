import { CartService } from './../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from 'src/app/common/cart-item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  
  constructor(private productService: ProductService, 
    private location : Location,
    private cartService : CartService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(() =>{
      this.handleProductDetails();
    })
  }

  handleProductDetails() {
    
    const productId = this.route.snapshot.paramMap.get("id");
    this.productService.getProduct(productId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  
 getBack(){
   this.location.back();
 }
  

  
  
  addToCart(){
    
    console.log(`Adding to cart : ${this.product.name}, ${this.product.unitPrice}`);

    const cartItem = new CartItem(this.product);

    this.cartService.addToCart(cartItem);

  }

 
  

}
