import { Component } from '@angular/core';
import { ProductService } from '../../servies/allproducts.servies';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllProductsComponent {
  products: any[];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  updateProduct(product: any) {
    // Your logic for updating the product
    console.log('Updating product:', product);
  }

  deleteProduct(product: any) {
    // Your logic for deleting the product
    this.productService.deleteProduct(product.id);
    this.products = this.productService.getProducts();
  }
}
