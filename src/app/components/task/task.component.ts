import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() taskName : string
  @Input() taskComplete : boolean
  
  constructor() { }

  ngOnInit(): void {
  }
  
  getComplete(){
    return this.taskComplete ? "Terminée" : "En cours"
  }
}
