import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'product-list',
  templateUrl:'productlist.component.html',
  styleUrls: ['productlist.component.css']
})
export class ProductListComponent {
  @Input() data: Array<any>;
  @Output() detail = new EventEmitter<any>();
  constructor() {
  }
  ngOnInit() {
    // console.log(this.data);
  }
  information(dataId: number) {
    let listSP = this.data;
    for(let i of listSP) {
      if(i.id === dataId) {
        this.detail.emit(i);
        //console.log(i);
      }
    }
  }
}
