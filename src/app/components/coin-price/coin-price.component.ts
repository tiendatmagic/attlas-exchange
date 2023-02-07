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
      this.coinLists = (res['data']);
      localStorage.setItem("coinLists", JSON.stringify(this.coinLists));
      run = setInterval(() => {
        this.loadData();
      }, 40000)
    }
    );
  }
  exportData() {
    setInterval(() => {
      this.coinLists.length = 0;
      this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[0]);
      this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[2]);
      this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[4]);
    }, 40000)
  }

  ngOnInit() {
    if (localStorage.getItem("coinLists")) {
      this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[0]);
      this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[2]);
      this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[4]);
      this.exportData();
    }
    else {
      this.loadData();
    }
  }
}
