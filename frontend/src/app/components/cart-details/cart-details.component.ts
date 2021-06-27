import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] =[];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  incrementQuantity(cartItem: CartItem){
    this.cartService.addToCart(cartItem);
    
  }

  decrementQuantity(cartItem: CartItem){

    this.cartService.decrementQuantity(cartItem);
   
  }

  deleteItem(cartItem: CartItem){
    this.cartService.remove(cartItem);
  }
  


  listCartDetails() {
    
    this.cartItems = this.cartService.cartItems;
    
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.cartService.computeCartTotals();
  }

}
