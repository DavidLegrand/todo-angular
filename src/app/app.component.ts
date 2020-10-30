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
      created: new Date('01/01/2021 09:05')
    },
    {
      name: 'Intégrer le module de paiement',
      complete: true,
      created: new Date('01/02/2021 10:32')
    },
    {
      name: 'Développer l\'authentification',
      complete: false,
      created: new Date('01/03/2021 12:55')
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
