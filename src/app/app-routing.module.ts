import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadrantComponent } from './components/quadrant/quadrant.component';
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
const routes: Routes = [
  {path:'Quad' ,component:QuadrantComponent},
  {path:'addtask' ,component:AddTaskComponent},
  {path:'list' ,component:ListComponent},
  { path:'todolist', component:TodolistComponent },
  { path:'', redirectTo:'/todolist', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
