import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ExampleService } from '../service/example.service'; 

@Component ({
  selector: 'product-list',
  templateUrl:'productlist.component.html',
  styleUrls: ['productlist.component.css']
})
export class ProductListComponent {
  @Output() detail = new EventEmitter<any>();

  public getProducts: any[];

  constructor( private exampleService: ExampleService) {
  }
  ngOnInit() {
    //this.listdata = this.exampleService.dataService;
    this.exampleService.getList().subscribe((response: any)=>{
      this.getProducts = response;
    });
  }
  information(dataId: number) {
    let listPR = this.getProducts;
    for(let i of listPR) {
      if(i.id === dataId) {
        this.detail.emit(i);
      }
    }
  }
}
