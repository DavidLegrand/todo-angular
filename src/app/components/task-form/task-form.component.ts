import { TodolistService } from 'src/app/services/todolist.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  constructor(private tdlS : TodolistService, private router : Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const newTask = form.value
    this.tdlS.addTask(newTask)
    this.router.navigate(['/todolist'])
  }
}
