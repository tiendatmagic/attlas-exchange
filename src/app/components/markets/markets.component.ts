import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent {
  coinLists: any = [];
  isLoading: boolean = true;
  take: number = 10;
  max: number = 0;
  constructor(private http: HttpClient, private data: DataService) { }
  loadData() {
    var run;
    clearInterval(run);

    run = setInterval(() => {
      this.loadCoin(this.take);
    }, 40000)

  }

  loadCoin(take: number = 10) {
    this.isLoading = true;
    this.coinLists.length = 0;
    this.data.getPrice().subscribe((res: any) => {
      this.max = Object.keys(res).length;
      let result: any = [];

      Object.keys(arr).forEach(function (key) {
        let obj = arr[key];
        obj["name"] = key;
        result.push(obj);

      });

      for (var i = 0; i < take; i++) {
        this.coinLists.push(result[i]);
      }

      this.isLoading = false;
    });

  }

  ngOnInit() {
    this.loadCoin(this.take);
    this.loadData();
  }
  onMore() {
    this.take += 10;
    if (this.take < this.max) {
      this.loadCoin(this.take);
    }
  }

}
