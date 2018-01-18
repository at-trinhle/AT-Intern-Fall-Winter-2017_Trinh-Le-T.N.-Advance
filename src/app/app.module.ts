import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProductDetailComponent } from './productdetail/productdetail.component';
import { ProductItemDirective } from './directive/productitem.directive';
import { PricePipe } from './pipe/price.pipe';
import { ExampleService } from './service/example.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemDirective,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ ExampleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
