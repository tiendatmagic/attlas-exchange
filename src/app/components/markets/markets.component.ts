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

  ngOnInit() {

    this.coinLists = JSON.parse(`${localStorage.getItem("coinLists")}`);
    this.isLoading = false;
  }


}
