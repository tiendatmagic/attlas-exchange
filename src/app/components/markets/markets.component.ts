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
      for (var i = 0; i < take; i++) {
        this.coinLists.push(res['data'][i]);
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
    this.loadCoin(this.take);
  }

}
