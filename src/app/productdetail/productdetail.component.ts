import { Component, Input } from '@angular/core';

@Component ({
  selector: 'product-detail',
  templateUrl: 'productdetail.component.html',
  styleUrls: ['productdetail.component.css']
})
export class ProductDetailComponent {
  @Input() dataDetail: any;
  constructor() {
  }

  ngOnInit() {
  }
}
