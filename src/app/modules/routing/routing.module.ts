import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

import { TodolistComponent } from '../../components/todolist/todolist.component';
import { TaskDetailsComponent } from '../../components/task-details/task-details.component';
import { LoginComponent } from '../../components/login/login.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TodolistComponent },
      { path: 'todolist', component: TodolistComponent },
      { path: 'todolist/:id', component: TaskDetailsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
})
export class RoutingModule {}
