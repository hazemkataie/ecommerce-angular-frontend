import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
  @Input() message!: string;
  @Output() sendResponse = new EventEmitter<string>();

  onSendResponse() {
    this.sendResponse.emit('Hi App Component');
  }
}
