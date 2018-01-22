import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  movePage: any;
  constructor() {}
  ngOnInit() {
    this.movePage = '';
  }
  FillData(event: any) {
    this.movePage = event;
  }
}
