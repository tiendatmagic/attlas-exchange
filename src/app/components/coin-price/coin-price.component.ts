import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coin-price',
  templateUrl: './coin-price.component.html',
  styleUrls: ['./coin-price.component.scss']
})
export class CoinPriceComponent {
  coinLists: any = [];

  constructor(private http: HttpClient, private data: DataService) { }

  loadData() {
    var run;
    clearInterval(run);
    this.data.getPrice().subscribe((res: any) => {
      this.coinLists.push((res['data'])[0]);
      this.coinLists.push((res['data'])[2]);
      this.coinLists.push((res['data'])[4]);
      run = setInterval(() => {
        this.loadData();
      }, 40000)
    }
    );
  }

  ngOnInit() {
    this.loadData();
  }
}
