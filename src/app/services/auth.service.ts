import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false;

  login(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        this.isAuth = true
        resolve()
      }, 1000)
    })
  }

  logout(){
    this.isAuth = false
  }
  constructor() { }
}
