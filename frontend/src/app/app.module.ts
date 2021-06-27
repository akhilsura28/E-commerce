import { ErrorComponent } from './components/error/error.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule, RoutesRecognized} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  {path:'check-out', component: CheckoutComponent },
  {path:'cart-details', component: CartDetailsComponent },
  {path:'products/:id', component: ProductDetailsComponent },
  {path:'search/:keyword', component: ProductListComponent },
  {path:'category/:id', component: ProductListComponent },
  {path:'category', component: ProductListComponent },
  {path:'products', component: ProductListComponent },
  {path:'', redirectTo: '/products', pathMatch:'full'},   //default
  //{path:'**', redirectTo: '/products', pathMatch:'full'}  // wildcard
  {path:'**', component: ErrorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ErrorComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
