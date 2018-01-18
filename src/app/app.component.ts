import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: any[] = [
    {id: 1, name: 'Product 1', price: '100', description: 'bsdsjf', image: 'iphone-8.jpg'},
    {id: 2, name: 'Product 2', price: '200', description: 'bsdsjf', image: 'iphone-8.jpg'},
    {id: 3, name: 'Product 3', price: '300', description: 'bsdsjf', image: 'iphone-8.jpg'}
  ];
  sendData: any;
  constructor() {}

  ngOnInit() {
    this.sendData = '';
  }

  showDetail(event: any) {
    this.sendData = event;
  }
}
