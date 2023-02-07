import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo: string = 'assets/images/logo-light-horizontal.png';
  showMenu: boolean = false;

  constructor(private router: Router) { }
  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
