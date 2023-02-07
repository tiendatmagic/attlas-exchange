import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { MarketsComponent } from './components/markets/markets.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SupportComponent } from './components/support/support.component';
import { SwapComponent } from './components/swap/swap.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'markets', component: MarketsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'swap', component: SwapComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
