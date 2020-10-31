import { TodolistService } from './../../services/todolist.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  constructor(private tdlS: TodolistService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.tdlS.getTaskById(+id).then((data) => (this.task = data));
    
  }
}
