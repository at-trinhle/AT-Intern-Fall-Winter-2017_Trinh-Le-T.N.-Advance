import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html'
})

export class ListNewsComponent {
  public getListNews: any[];

  constructor(private newsService: NewsService){}
  
  ngOnInit() {
    this.newsService.getListNews().subscribe((responsive: any) => {
      this.getListNews = responsive;
      // console.log(this.getListNews);
    })
  }

}
