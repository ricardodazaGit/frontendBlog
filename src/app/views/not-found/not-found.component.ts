import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rp-not-found',
  template: `
    <h1>Not Found</h1>
    <h2>404</h2>
    <a routerLink="/">Go Home</a>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
