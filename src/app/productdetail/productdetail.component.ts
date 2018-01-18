import { Component, Input } from '@angular/core';

@Component ({
  selector: 'product-detail',
  templateUrl: 'productdetail.component.html',
  styleUrls: ['productdetail.component.css']
})
export class ProductDetailComponent {
  private _dataDetail;

  @Input()
  set dataDetail(dataDetail: any) {
    this._dataDetail = dataDetail;
  }

  get dataDetail(): any {
    return this._dataDetail;
  }

  constructor() {
  }

  ngOnInit() {
    console.log(this.dataDetail);
  }
}
