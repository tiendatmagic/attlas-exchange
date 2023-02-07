import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { InvestTradingComponent } from './components/invest-trading/invest-trading.component';
import { AccumulateComponent } from './components/accumulate/accumulate.component';
import { CommitComponent } from './components/commit/commit.component';
import { FreeCryptoComponent } from './components/free-crypto/free-crypto.component';
import { MarketsComponent } from './components/markets/markets.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinPriceComponent } from './components/coin-price/coin-price.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SliderComponent,
    StatisticsComponent,
    InvestTradingComponent,
    AccumulateComponent,
    CommitComponent,
    FreeCryptoComponent,
    MarketsComponent,
    HomeComponent,
    CoinPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
