import { Component,OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name :string;
  @Output() loggin = new EventEmitter();
  constructor() {

  }
  ngOnInit() {

  }
  login() {
    this.loggin.emit('Trinh');
  }
}
