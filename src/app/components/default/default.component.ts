import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  title='ng-carousel-demo';

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


  constructor() { }

  ngOnInit(): void {
  }

}
