import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {CarDTO} from "../../CarDTO";
import {Router} from "@angular/router";
import {CarDTOServiceService} from "../../carDTO-service.service";


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  title='ng-carousel-demo';

  //function for vendors
  customOptions: OwlOptions= {
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
    }}

  //function for team
  teamOptions: OwlOptions={
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0:{
        items:1
      },
      576:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      }
    }
  }

  //function for clients

  clientOptions: OwlOptions={
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0:{
        items:1
      },
      576:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
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
