import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-footer',
  template: `
  <footer class="footer text-center">
  <div class="row text-white">
    <p class="col-lg-6">
      www.elreclamodelaperdiz.com
    </p>
    <p class="col-lg-6">
      &copy;Blog de Joselito
    </p>
  </div>
</footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
