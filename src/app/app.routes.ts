import { Routes } from '@angular/router';
import { Hello } from './hello/hello';
import { About } from './about/about';
import { ProductDetail } from './product-detail/product-detail';
import { ProductList } from './product-list/product-list';

export const routes: Routes = [
  // { path: '', component: Hello },
  // { path: 'about', component: About },
  { path: '', title: 'Product List', component: ProductList },
  { path: 'product/:id', title: 'Product Detail', component: ProductDetail }
];
