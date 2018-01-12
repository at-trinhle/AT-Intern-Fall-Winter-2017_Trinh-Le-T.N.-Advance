import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  @Input() user:	string;
  constructor() {
    this.user = name;
  }
  ngOnInit() {

  }
}
