import { UserService } from './../../services/user.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription
  constructor(private uS: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.uS.userSubject.subscribe(
      (users:User[]) => this.users = users
    )
    this.uS.emitUsers();
  }
  ngOnDestroy():void{
    this.userSubscription.unsubscribe()
  }
}
