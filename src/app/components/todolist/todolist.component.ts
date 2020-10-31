import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  isAuth : boolean;
  toDoList: Promise<any>;

  constructor(private tdlS: TodolistService, private auth: AuthService) {

  }

  ngOnInit() {
    this.isAuth = this.auth.isAuth
    this.toDoList = this.tdlS.toDoList;
  }

  onComplete() {
    this.tdlS.completeAll();
  }

  onUncomplete() {
    this.tdlS.uncompleteAll();
  }
}
