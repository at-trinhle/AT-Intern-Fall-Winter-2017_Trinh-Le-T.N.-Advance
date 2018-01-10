import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HellowordComponent} from './helloword.component';


@NgModule({
  declarations: [ 
    HellowordComponent, AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HellowordComponent]
})
export class AppModule { }
