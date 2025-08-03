import { Routes } from '@angular/router';
import { Hello } from './hello/hello';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Hello },
  { path: 'about', component: About }
];
