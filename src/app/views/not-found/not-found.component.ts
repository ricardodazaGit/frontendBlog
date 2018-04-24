import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rp-not-found',
  template: `
    <p>Para cualquier duda o consulta, podéis escribirnos a blogjoselito@outlook.com</p>
    <a routerLink="/">Go Home</a>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
