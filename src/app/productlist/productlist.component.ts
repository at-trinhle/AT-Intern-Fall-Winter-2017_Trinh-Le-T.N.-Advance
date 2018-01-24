import { Component, Input, OnInit, Output } from '@angular/core';
import { ExampleService } from '../service/example.service'; 

@Component ({
  selector: 'product-list',
  templateUrl:'productlist.component.html',
  styleUrls: ['productlist.component.css']
})
export class ProductListComponent {

  public getProducts: any[];

  constructor( private exampleService: ExampleService) {
  }

  ngOnInit() {
    this.exampleService.getList().subscribe((response: any) => {
      this.getProducts = response;
    });
  }

}
