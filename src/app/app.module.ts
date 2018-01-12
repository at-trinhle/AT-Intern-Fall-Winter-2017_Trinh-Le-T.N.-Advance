import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HellowordComponent} from './helloword/helloword.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent} from './sidebar/sidebar.component';
import { MainComponent} from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [ 
    HellowordComponent, AppComponent, HighlightDirective, HeaderComponent,SidebarComponent,MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
