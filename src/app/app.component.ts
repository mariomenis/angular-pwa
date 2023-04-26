import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-pwa';
  public response = '';
  public destination: FormControl = new FormControl('http://192.168.200.20/pa-italia-crawler-reports/');
  private worker?: Worker;


  constructor() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      // const url = new URL('./app.worker', import.meta.url);
      const url = 'assets/app.worker.js';
      console.log(url);
      this.worker = new Worker(url);
      this.worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
        this.response = data;
      };
      this.worker.postMessage('hello');
    } else {
      this.worker = undefined;
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  send(): void {
    if (this.worker) {
      this.worker.postMessage(this.destination.value);
    } else {
      alert('Non posso');
    }
  }
}


