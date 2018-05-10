import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-footer',
  template: `
  <footer class="footer text-center">
  <div class="container">
    <p class="text-white">
      &copy; Blog de Joselito
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
