import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [{
    firstName : 'John',
    lastName : 'Doe',
    email : 'johndoe@todolist.com',
    team : 'Dev team',
    skills:['Angular', 'NodeJS', 'MongoDB']
  }]
  userSubject = new Subject<User[]>();
  
  constructor() { }
  
  emitUsers(){
    this.userSubject.next(this.users.slice())
  }

  addUser(user:User){
    this.users.push(user);
    this.emitUsers()
  }
}
