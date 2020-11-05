import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  isAuth : boolean;
  toDoList: Task[];
  toDoListSubscription: Subscription
  constructor(private tdlS: TodolistService, private auth: AuthService) {

  }

  ngOnInit() {
    this.isAuth = this.auth.isAuth
    this.toDoListSubscription = this.tdlS.toDoListSubject.subscribe((toDoList: Task[])=>{
      this.toDoList = toDoList;
    })
    this.tdlS.load()
  }

  ngOnDestroy(){
    this.toDoListSubscription.unsubscribe()
  }
  
  onComplete() {
    this.tdlS.completeAll();
  }

  onUncomplete() {
    this.tdlS.uncompleteAll();
  }
}
