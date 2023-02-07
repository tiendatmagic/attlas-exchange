import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logo: string = 'assets/images/logo-full-v-light.png';
  androidIcon: string = 'assets/images/icon_android.png';
  iosIcon: string = 'assets/images/icon_ios.png';
}
