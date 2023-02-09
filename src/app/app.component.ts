import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attlas-exchange';
  coinLists: any;
  isLoading: boolean = true;

  constructor(private http: HttpClient, private data: DataService) { }
  loadData() {
    var run;
    clearInterval(run);

    run = setInterval(() => {
      this.data.getPrice().subscribe((res: any) => {
        this.coinLists = (res['data']);
        localStorage.setItem("coinLists", JSON.stringify(this.coinLists));
        this.isLoading = false;
      });
    }, 40000)

  }
  ngOnInit() {
    this.data.getPrice().subscribe((res: any) => {
      this.coinLists = (res['data']);
      localStorage.setItem("coinLists", JSON.stringify(this.coinLists));
      this.isLoading = false;
    });
    this.loadData();
  }
}
