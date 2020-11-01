import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;

  login(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        this.isAuth = true
        resolve()
      }, 1)
    })
  }

  logout(){
    this.isAuth = false
  }
  constructor() { }
}
