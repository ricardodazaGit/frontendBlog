import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-nav',
  templateUrl: './nav.component.html',
  styles: [
    `
    nav {
      background-color: #006600 !important;
    }
    .navbar-toggler-icon{
      color: white;
    }
    `
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
