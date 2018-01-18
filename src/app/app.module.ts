import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { ProductItemDirective } from './directive/productitem.directive';

@NgModule({
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
