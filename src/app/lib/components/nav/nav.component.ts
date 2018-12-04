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
    #navbarNav{
      padding-left: 1em;
    }
    .navbar-brand {
      padding-top: 0;
      padding-bottom: 0;
    }
    .dropdown-menu {
      background-color: #006600 !important; 
    }
    .dropdown-item{
      color: white !important
    }
    .dropdown-item:hover {
      background-color: #03a203
    }
    `
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
