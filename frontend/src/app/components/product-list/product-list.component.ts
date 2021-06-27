import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  //templateUrl: './product-list.table.component.html',
  templateUrl: './product-list.grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;
  searchMode: boolean;

  constructor(private ProductService: ProductService, 
    private cartService: CartService ,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
        this.listProducts();
    });  
  }


  listProducts(){
    
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
       this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    
    const myKeyword = this.route.snapshot.paramMap.get('keyword');
    
    this.ProductService.searchProducts(myKeyword).subscribe(
      data => {
          this.products = data;
      }
    )

  }

  handleListProducts(){
    //let data = this.ProductService.getProductList();
    //console.log(data);
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    
    if(hasCategoryId){
    
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id'); 
    }
    else{
      this.currentCategoryId = 1;
    }

    this.ProductService.getProductList(this.currentCategoryId).subscribe(data => {
      //console.log(data);
      this.products = data;
    })
  }

  addToCart(product: Product){

    console.log(`adding to cart: ${product.name}, ${product.unitPrice}`)
    //we will write real code later.
    //--------------------------------
   
    const cartItem = new CartItem(product);
    this.cartService.addToCart(cartItem);


  }

}
