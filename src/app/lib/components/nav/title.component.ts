import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-title',
  template: `
    <a routerLink="/">{{ title }}</a>
    <a routerLink="/perdizConReclamo"></a>
  `,
  styles: []
})
export class TitleComponent implements OnInit {

  title="El Reclamo de la Perdiz"

  constructor() { }

  ngOnInit() {
  }

}
