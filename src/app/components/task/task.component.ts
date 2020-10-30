import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskName = "Finaliser les maquettes"
  taskComplete = false
  
  constructor() { }

  ngOnInit(): void {
  }
  
  getComplete(){
    return this.taskComplete ? "Terminée" : "En cours"
  }
}
