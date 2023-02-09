import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor() { }
  isShowDiv=true;
  addCar:string= "Add Car";

  showForm() {
    if(this.isShowDiv){
      this.addCar="Close";
    }
    else {
      this.addCar="Add Car";
    }
    this.isShowDiv=!this.isShowDiv;
  }

}
