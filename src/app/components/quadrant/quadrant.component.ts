import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.css']
})
export class QuadrantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addtask(){
    console.log("addtask");
    this.router.navigateByUrl("/addtask")
  }

}
