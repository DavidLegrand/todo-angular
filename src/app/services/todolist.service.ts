import { Injectable } from '@angular/core';
import { Task } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  toDoList: Promise<Task[]> = new Promise((resolve, reject) => {
    const data: Task[] = [
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
    setTimeout(() => {
      resolve(data);
    }, 1);
  });

  constructor() {}

  async completeAll() {
    (await this.toDoList).map((task) => (task.complete = true));
  }

  async uncompleteAll() {
    (await this.toDoList).map((task) => (task.complete = false));
  }
  async complete(id) {
    (await this.toDoList).map((task) => {
      if (task.id === id) {
        task.complete = true;
      }
    });
  }
  async uncomplete(id) {
    (await this.toDoList).map((task) => {
      if (task.id === id) {
        task.complete = false;
      }
    });
  }
  async getTaskById(id: number) {
    return (await this.toDoList).find((task) => task.id === id);
  }
}
