import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[productItem]',
})
export class ProductItemDirective {
  @Input() productItem: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {  }
  ngOnInit() {
    this.el.nativeElement.innerHTML = '<h2>'+this.productItem.name+'</h2><img src="../assets/images/'+this.productItem.image+'" alt="image"><p>'+this.productItem.price+'$</p><button>See more</button>';
  }
}
