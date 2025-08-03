import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../data';
import { CommonModule } from '@angular/common';
import { error } from 'console';

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
    this.dataService.getProductsFromApi().then(data => {
      this.products = data;
    }).catch(err => {
      console.error('Error fetching products:', err);
    });
  }
}
