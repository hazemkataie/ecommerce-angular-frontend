import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    CommonModule,
    Hello
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-angular-frontend');
  
  message = 'Learning Angular';

  onMessageReceived(message: string) {
    alert(`Hello from Hello component:` + message);
  }
}
