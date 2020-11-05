import { Injectable } from '@angular/core';
import { Task } from '../interfaces';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  toDoListSubject = new Subject<Task[]>();
  
  private toDoList: Task[] = [];

  emitToDoListSubject() {
    this.toDoListSubject.next(this.toDoList.slice());
  }

  constructor(private http: HttpClient) {}

  completeAll() {
    this.toDoList.map((task) => (task.complete = true));
    this.save();
  }

  uncompleteAll() {
    this.toDoList.map((task) => (task.complete = false));
    this.save();
  }
  complete(id) {
    this.toDoList.map((task) => {
      if (task.id === id) {
        task.complete = true;
      }
    });
    this.save();
  }
  uncomplete(id) {
    this.toDoList.map((task) => {
      if (task.id === id) {
        task.complete = false;
      }
    });
    this.save();
  }

  getTaskById(id: number) {
    return this.toDoList.find((task) => task.id === id);
  }

  addTask(newTask: Task) {
    const task: Task = {
      id: this.getLastId() + 1,
      name: newTask.name,
      complete: newTask.complete,
      created: new Date(),
    };
    this.toDoList.push(task);
    this.save();
  }
  getLastId(): number {
    return this.toDoList.reduce((prev, curr) =>
      prev.id < curr.id ? prev : curr
    ).id;
  }

  save() {
    this.emitToDoListSubject();
    this.http
      .put('https://todo-f7ebb.firebaseio.com/tasks.json', this.toDoList)
      .subscribe({
        next: (data) => console.log('data sent to server', data),
        error: (error) => console.error('error when puting data', error),
        complete: () => console.log('Data sent !'),
      });
  }

  load() {
    this.http.get('https://todo-f7ebb.firebaseio.com/tasks.json').subscribe({
      next: (data: Array<Task>) => {
        console.log('data fetched from server', data)
        this.toDoList = data;
        this.emitToDoListSubject();
      },
      error: (error) => console.error('error when fetching data', error),
      complete: () => console.log('Fetching complete !'),
    });
  }
}
