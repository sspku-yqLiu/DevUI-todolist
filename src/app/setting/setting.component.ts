import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  inputNum = 8;
  minNum = 0;
  maxNum = 20;

  minWorkTime = 15;
  maxWorkTime = 60;
  stepWorkTime = 1;
  valueWorkTime = 25;

  minRestTime = 2;
  maxRestTime = 15;
  stepRestTime = 1;
  valueRestTime = 5;
  music = ['默认铃声', '钢琴', '吉他', '架子鼓', '小提琴', '大提琴', '风铃'];

  menu = [{ 
    title: '分享',
    children: [
      {title: '分享我'}
    ]
  },{
    title: '反馈',
    children: [
      {title:"评分"},
      {title:"意见反馈"}
    ]
  }];

  descriptionNum(value: number) {
    return `${value} tomatoes`;
  }

  showValueWorkTime($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }

  showValueRestTime($event, text = null) {
    console.log(text ? text + ' ' + $event : $event);
  }

  getValue(value) {
    console.log(value);
  }
  
  constructor() {
   }

  ngOnInit() {
  }

}
