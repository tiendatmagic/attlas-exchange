import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MarketsComponent } from './components/markets/markets.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'markets', component: MarketsComponent },
  { path: '', component: MainComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
