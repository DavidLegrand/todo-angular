import { TodolistService } from './services/todolist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuth = false;
  toDoList: Promise<any>;

  constructor(private tdlS: TodolistService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  ngOnInit() {
    this.toDoList = this.tdlS.toDoList;
  }

  onComplete() {
    this.tdlS.completeAll()
  }
  
  onUncomplete() {
    this.tdlS.uncompleteAll()
  }
}
