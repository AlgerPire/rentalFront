import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CarDTOServiceService} from "./carDTO-service.service";
import {CarDTO} from "./CarDTO";


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  car: CarDTO[];

  constructor(private router: Router, private carService: CarDTOServiceService) {
  }

  findDto() {
    this.carService.findDto().subscribe(data => {
      this.car = data;
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.findDto();
    });
  }

}
