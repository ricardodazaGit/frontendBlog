import { Component } from '@angular/core';

@Component({
  selector: 'rp-root',
  template: `
    <rp-nav></rp-nav>
    <router-outlet></router-outlet>
    <rp-footer><rp-footer>
  `,
  styles: [
    
  ]
})
export class AppComponent {
  title = 'rp';
}
