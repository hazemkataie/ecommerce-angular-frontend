import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  imports: [
    CommonModule
  ],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  products: any[] = [];

  constructor(private dataService: Data) { }

  ngOnInit() {
    this.dataService.getProductsFromApi().subscribe((data: any[]) => {
      this.products = data;
    }, error => {
      console.error('Error fetching products:', error);
    });
  }

  // addNewProduct() {
  //   this.dataService.addProduct('Ipad');
  //   this.products = this.dataService.getProducts();
  // }
}
