import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { MarketsComponent } from './components/markets/markets.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'markets', component: MarketsComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
