import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'rp-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  now = moment().format()

  constructor() { }

  ngOnInit() {
  }

}
