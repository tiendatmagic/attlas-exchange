import { Component } from '@angular/core';

@Component({
  selector: 'app-free-crypto',
  templateUrl: './free-crypto.component.html',
  styleUrls: ['./free-crypto.component.scss']
})
export class FreeCryptoComponent {
  logInImage: string = 'assets/images/log-in.gif';
  ReceiveImage: string = 'assets/images/receive.gif';
  shareImage: string = 'assets/images/share.gif';
}
