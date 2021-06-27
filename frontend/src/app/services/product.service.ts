import { ProductCategory } from 'src/app/common/product-category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'//for whole project(global)
})

export class ProductService {
  
  private baseUrl = "http://localhost:8080/api/products";
  private categoryUrl = "http://localhost:8080/api/product-category";

  constructor(private httpClient : HttpClient) { 

  }

  getProductList(categoryId: number): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
    return this.httpClient.get<GetResponseProduct>(searchUrl)
    .pipe(map(response => response._embedded.products))
  }

  searchProducts(myKeyword: string) {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${myKeyword}`;    
    return this.httpClient.get<GetResponseProduct>(searchUrl)
    .pipe(map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]>{
    
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl)
    .pipe(map(response => response._embedded.productCategories));

  }

  getProduct(productId: string): Observable<Product> {
    const productUrl = `${this.baseUrl}/${productId}`;
    return this.httpClient.get<Product>(productUrl);
  }
  


}

interface GetResponseProduct{
  _embedded:{
    products : Product[];
  }
}

interface GetResponseProductCategory{
  _embedded:{
    productCategories : ProductCategory[];
  }
}