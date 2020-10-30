import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuth = false;
  taskName1 = 'Finaliser les maquettes';
  taskName2 = 'Intégrer le module de paiement';
  taskName3 = "Développer l'authentification";

  taskComplete1 = false
  taskComplete2 = true
  taskComplete3 = false
  
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }
  onComplete() {
    console.log('All tasks are completed !');
  }
}
