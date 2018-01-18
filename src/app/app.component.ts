import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sendData: any;
  constructor() {}

  ngOnInit() {
    this.sendData = '';
  }

  showDetail(event: any) {
    this.sendData = event;
  }
}
