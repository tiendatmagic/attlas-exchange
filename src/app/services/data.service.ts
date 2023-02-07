import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getPrice() {
    return this.http.get('https://api.attlas.io/api/v1/exchange/market_watch');
  }
}
