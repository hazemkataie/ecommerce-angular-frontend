import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  constructor(private http: HttpClient) { }


  // getProducts() {
  //   return this.products;
  // }

  // addProduct(product: string) {
  //   this.products.push(product);
  // }

  getProductsFromApi() {
    return this.http.get<string[]>('https://fakestoreapi.com/products');
  }
}
