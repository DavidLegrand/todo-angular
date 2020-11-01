import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'todolist', component: TodolistComponent, canActivate:[AuthGuard]},
  { path: 'todolist/:id', component: TaskDetailsComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
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
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
