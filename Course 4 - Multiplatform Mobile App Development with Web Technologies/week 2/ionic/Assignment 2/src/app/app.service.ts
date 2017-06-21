import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { AppSetting } from './app.setting';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getDishes() {
    return this.http.get(`${AppSetting.BASE_URL}dishes`)
      .map(response => response.json());
  }

  getDish(id: number) {
    return this.http.get(`${AppSetting.BASE_URL}dishes/${id}`)
      .map(response => response.json());
  }

  getPromotion(id: number) {
    return this.http.get(`${AppSetting.BASE_URL}promotions/${id}`)
      .map(response => response.json());
  }

  getLeadership() {
    return this.http.get(`${AppSetting.BASE_URL}leadership`)
      .map(response => response.json());
  }

  getLeader(id: number) {
    return this.http.get(`${AppSetting.BASE_URL}leadership/${id}`)
      .map(response => response.json());
  }

  getFavorites() {
    return this.http.get(`${AppSetting.BASE_URL}favorites`)
      .map(response => response.json());
  }
  
  addFavorite(dishId: number): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${AppSetting.BASE_URL}favorites`, { dishId }, options)
      .map(response => response.json());
  }

  deleteFavorite(dishId: number): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${AppSetting.BASE_URL}favorites/${dishId}`, options)
      .map(response => response.json());
  }
  
}