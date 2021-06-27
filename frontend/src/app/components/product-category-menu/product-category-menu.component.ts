import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  productCategories:ProductCategory[];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories();
  }

  listProductCategories() {
    this.ProductService.getProductCategories().subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.productCategories = data;

      }
    )
  }
}
