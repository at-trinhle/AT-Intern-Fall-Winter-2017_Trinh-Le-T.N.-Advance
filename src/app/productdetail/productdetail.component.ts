import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute	}	from	'@angular/router';
import { ExampleService} from '../service/example.service';

@Component ({
  selector: 'product-detail',
  templateUrl: 'productdetail.component.html',
  styleUrls: ['productdetail.component.css']
})
export class ProductDetailComponent implements OnInit {

  getId: any;
  oneProduct : any;

  constructor(
    private exampleService: ExampleService,
    private route: ActivatedRoute ) {
  }

  ngOnInit() {
    
    this.route.params.subscribe(parameters=>{
      if(parameters['id']) {
        this.getId = +parameters['id'];
        this.exampleService.getList().subscribe((response: any) => {
          this.oneProduct = response[this.getId -1];
          //console.log(this.oneProduct);
        });
      }
    })
  }
}
