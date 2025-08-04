import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product: any;
  loading = true;

  constructor(private route: ActivatedRoute, private productService: Product) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getOne(id).subscribe({
        next: (data) => {
          this.product = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Detail could not be retrieved:', err);
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }
}
