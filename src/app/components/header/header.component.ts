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
  event$;
  public homePage = false;

  constructor(private router: Router) {

    this.event$
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              if (event.url == "/") {
                this.homePage = true;
              }
              else {
                this.homePage = false;
              }
            }
          });
  }
  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
