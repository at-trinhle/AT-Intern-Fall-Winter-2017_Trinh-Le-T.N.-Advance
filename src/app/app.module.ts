import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { MatButtonModule } from '@angular/material/button';
import { ListNewsComponent } from './listnews/listnews.component';
import { FormComponent } from './form/form.component';
import { NewsService } from './service/news.service';
import { HttpModule } from '@angular/http';
import { DetailComponent } from './detail/detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';

  const routes: Routes = [
    {
      path: 'home',
      component: HomepageComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'news',
      component: NewsComponent,
      children: [
        {
          path: 'list',
          component: ListNewsComponent
        },
        {
          path: 'detail/:id',
          component: DetailComponent
        },
        {
          path: 'form',
          component: FormComponent
        }
      ]
    }
  ]

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    HomepageComponent,
    ContactComponent,
    NewsComponent,
    ListNewsComponent,
    FormComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
    MatButtonModule,
    HttpModule,
    MatFormFieldModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
