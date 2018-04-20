import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-nav',
  templateUrl: './nav.component.html',
  styles: [
    `
    .bd-navbar {
      background-color: #006600;
    }
    a {
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
