import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../../styles/pages/_detail.scss']
})

export class DetailComponent implements OnInit {

  ID: any;
  detail: any;
  constructor( 
    private newsService: NewsService,
    private routeActived : ActivatedRoute
  ){}
  
  ngOnInit(){
    this.routeActived.params.subscribe(data => {
      if(data['id']) {
        this.ID = +data['id'];
        this.newsService.getListNews().subscribe((res: any) => {
          this.detail = res[this.ID -1];
        })
      }
    })
  }
}
