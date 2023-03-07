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
    // return this.http.get('https://api.attlas.io/api/v1/exchange/market_watch');
    return this.http.get('https://exchange.vndc.io/exchange/api/v1/user/charts?baseCurrency=USDT');
  }
}
