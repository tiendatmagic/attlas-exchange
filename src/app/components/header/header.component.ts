import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo: string = 'assets/images/logo-light-horizontal.png';
  showMenu: boolean = false;
  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
