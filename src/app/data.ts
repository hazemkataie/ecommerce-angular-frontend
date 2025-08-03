import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  constructor() { }

  getProductsFromApi() {
    return fetch('https://fakestoreapi.com/products')
      .then(response => response.json());
  }
}
