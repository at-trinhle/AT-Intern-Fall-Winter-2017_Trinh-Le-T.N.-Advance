import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class NewsService {
  private newsUrl = '../assets/data/news.json';
  
  constructor(private _http: Http) {}

  getListNews(): Observable<any>  {
    return this._http.get(this.newsUrl).map((response: Response) => response.json());
  }
}
