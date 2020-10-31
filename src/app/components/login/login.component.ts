import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isAuth: boolean;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuth = this.auth.isAuth;
  }

  onLogin() {
    this.auth.login().then(() => {
      this.isAuth = this.auth.isAuth;
      this.router.navigate(['todolist'])
    });
  }
  onLogout() {
    this.auth.logout();
    this.isAuth = this.auth.isAuth;
  }
}
