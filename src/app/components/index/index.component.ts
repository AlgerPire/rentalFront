import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {CarDTO} from "../../CarDTO";
import {Router} from "@angular/router";
import {CarDTOServiceService} from "../../carDTO-service.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //function for vendors
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    dots: true,
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  }

  car: CarDTO[];

  constructor(private router: Router, private carService: CarDTOServiceService) {
  }

  findDto() {
    this.carService.findDto().subscribe(data => {
      this.car = data;
    });
  }

  ngOnInit(): void {
    this.findDto();
  }
}
