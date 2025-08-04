import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: any[] = [];
  loading = true;

  constructor(private productService: Product, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  goToDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
