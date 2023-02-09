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
  constructor(private http: HttpClient, private data: DataService) { }
  loadData() {
    var run;
    clearInterval(run);

    run = setInterval(() => {
      this.coinLists.length = 0;
      for (var i = 0; i < 10; i++) {
        this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[i]);
      }
    }, 40000)
  }

  ngOnInit() {

  }
  ngDoCheck() {
    if (this.data.isData) {
      this.coinLists.length = 0;
      for (var i = 0; i < 10; i++) {
        this.coinLists.push(JSON.parse(`${localStorage.getItem("coinLists")}`)[i]);
      }
    }
  }
}
