import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isData = false;
  coinData: any = [];
  constructor(private http: HttpClient) { }
  getPrice() {
    return this.http.get('https://api.attlas.io/api/v1/exchange/market_watch');
  }
  getMorePrice() {
    return this.http.get('https://api.invest.vndc.io/api/v1/currency?hasChart=true');
  }
}
