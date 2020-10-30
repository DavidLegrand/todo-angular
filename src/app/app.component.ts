import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuth = false;
  toDoList = [
    {
      name: 'Finaliser les maquettes',
      complete: false,
    },
    {
      name: 'Intégrer le module de paiement',
      complete: true,
    },
    {
      name: 'Développer l\'authentification',
      complete: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }
  onComplete() {
    console.log('All tasks are completed !');
  }
}
