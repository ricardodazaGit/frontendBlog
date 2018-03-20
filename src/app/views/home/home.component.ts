import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'rp-home',
  template: `
    <main>
    <header>Main content of the Home Page</header>
    <div>Still a work in progress... for Now: {{ now }}</div>
    </main>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  now = moment().format()

  constructor() { }

  ngOnInit() {
  }

}
