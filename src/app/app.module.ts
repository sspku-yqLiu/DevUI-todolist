import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadrantComponent } from './components/quadrant/quadrant.component';
import { ListComponent } from './components/list/list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { SettingComponent } from './setting/setting.component';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { TodayComponent } from './components/today/today.component';


@NgModule({
  declarations: [
    AppComponent,

    QuadrantComponent,
    ListComponent,
    AddTaskComponent,
    HeaderComponent,
    TaskComponent,
    TodolistComponent,
    SettingComponent,
    AddComponent,
    HomeComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    DevUIModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
