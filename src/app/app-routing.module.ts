import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuadrantComponent } from './components/quadrant/quadrant.component';
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'' ,component:QuadrantComponent},
  {path:'Quad' ,component:QuadrantComponent},
  {path:'addtask' ,component:AddTaskComponent},
  {path:'list' ,component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
