import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const appRoutes: Routes = [
  { path: 'todolist', component: TodolistComponent, canActivate:[AuthGuard]},
  { path: 'todolist/new', component: TaskFormComponent, canActivate:[AuthGuard]},
  { path: 'todolist/:id', component: TaskDetailsComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent, canActivate:[AuthGuard] },
  { path: 'users/new', component: UserFormComponent, canActivate:[AuthGuard] },
  { path: '', component: TodolistComponent, canActivate:[AuthGuard]},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    TodolistComponent,
    NavComponent,
    TaskDetailsComponent,
    NotFoundComponent,
    TaskFormComponent,
    UserListComponent,
    UserFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
