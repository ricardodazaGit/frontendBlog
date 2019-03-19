import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'rp-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, AfterViewChecked {

  now = moment().format()

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    document.title = "Perdiz con reclamo y esperas del jabalí: Blog de Joselito"
  }
}
