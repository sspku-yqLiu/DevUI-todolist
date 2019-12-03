import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  values = ['重要紧急', '重要不紧急','紧急不重要', '不重要不紧急'];
  choose = '重要紧急';
  constructor() { }

  ngOnInit() {
  }
  log($event) {
    console.log($event);
  }

}
