import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-publications',
  template: `
    <rp-new></rp-new>
    <rp-list></rp-list>
  `,
  styles: []
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
