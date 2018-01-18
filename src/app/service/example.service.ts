import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ExampleService {
  private apiUrl = '../assets/data/data.json';
  constructor(private _http: Http) {}
  getList(): Observable<any>  {
    return this._http.get(this.apiUrl).map((response: Response) => response.json());
  }
}
