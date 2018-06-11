import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rp-not-found',
  template: `
    <p>Para cualquier duda, consulta o sugerencia, podéis escribirnos a <a href="mailto:blogjoselito@outlook.com">blogjoselito@outlook.com</a></p>
    <a routerLink="/" class="brown-title">Volver a inicio</a>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
