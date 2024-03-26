import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      image: '../../assets/images/5ac95ddafe722f7d744805a1e679af7d.jpg',
      price: '400$',
      description: 'This is product 1',
      totalQuantity: 4
    },
    {
      id: 2,
      name: 'Product 2',
      image: '../../assets/images/97f4d732def290fd13d11ed6c8ff1b23.jpg',
      price: "3000$",
      description: 'This is product 2',
      totalQuantity: 5
    },
    {
      id: 3,
      name: 'Product 2',
      image: '../../assets/images/1957cf40-7743-41b1-b56b-251c9258d17b.jpg',
      price: "3000$",
      description: 'This is product 2',
      totalQuantity: 5
    },
    {
      id: 4,
      name: 'Product 2',
      image: '../../assets/images/58ac1f3414dceb94cc92bb6022908f03.jpg',
      price: "3000$",
      description: 'This is product 2',
      totalQuantity: 5
    },
    {
      id: 5,
      name: 'Product 2',
      image: '../../assets/images/105f9212ab4dcfa58d4889714d668a8a.jpg',
      price: "3000$",
      description: 'This is product 2',
      totalQuantity: 5
    }
  ];

  constructor() { }

  getProducts(): any[] {
    return this.products;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
