import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent {
  coinLists: any;
  isLoading: boolean = true;
  constructor(private http: HttpClient, private data: DataService) { }

  loadData() {
    this.data.getPrice().subscribe((res: any) => {
      this.coinLists = (res['data']);
      console.log(this.coinLists);
      this.isLoading = false;

    }
    );
  }

  ngOnInit() {
    setInterval(() => {
      this.loadData();
    }, 40000)
  }
}
