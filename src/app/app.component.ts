import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuth: boolean = false;
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }
}
