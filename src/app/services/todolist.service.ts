import { Injectable } from '@angular/core';
import { Task } from '../interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  toDoListSubject = new Subject<Task[]>();
  private toDoList: Task[] = [
    {
      id: 1,
      name: 'Finaliser les maquettes',
      complete: false,
      created: new Date('01/01/2021 09:05'),
    },
    {
      id: 2,
      name: 'Intégrer le module de paiement',
      complete: true,
      created: new Date('01/02/2021 10:32'),
    },
    {
      id: 3,
      name: "Développer l'authentification",
      complete: false,
      created: new Date('01/03/2021 12:55'),
    },
  ];
  emitToDoListSubject() {
    this.toDoListSubject.next(this.toDoList.slice());
  }

  constructor() {}

  completeAll() {
    this.toDoList.map((task) => (task.complete = true));
    this.emitToDoListSubject();
  }

  uncompleteAll() {
    this.toDoList.map((task) => (task.complete = false));
    this.emitToDoListSubject();
  }
  complete(id) {
    this.toDoList.map((task) => {
      if (task.id === id) {
        task.complete = true;
      }
    });
    this.emitToDoListSubject();
  }
  uncomplete(id) {
    this.toDoList.map((task) => {
      if (task.id === id) {
        task.complete = false;
      }
    });
    this.emitToDoListSubject();
  }
  getTaskById(id: number) {
    return this.toDoList.find((task) => task.id === id);
  }
}
