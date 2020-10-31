import { TodolistService } from './../../services/todolist.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task : Task
  
  constructor(private tdlS: TodolistService) { }

  ngOnInit(): void {
  }
  
  getComplete(){
    return this.task.complete ? "Terminée" : "En cours"
  }
  onComplete(){
    this.tdlS.complete(this.task.id)
  }
  onUncomplete(){
    this.tdlS.uncomplete(this.task.id)
  }
}
