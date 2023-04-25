import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-pwa';
  public response = 'no responses';
  send(): void {
    console.log('send');
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const url = new URL('./app.worker', import.meta.url);
  console.log(url);
  const worker = new Worker(url);
  // worker.onmessage = ({ data }) => {
  //  console.log(`page got message: ${data}`);
  // };
  // worker.postMessage('hello');
  console.log('wallabie');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
1}
