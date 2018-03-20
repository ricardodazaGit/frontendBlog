import { Component } from '@angular/core';
import { Publication } from './publication';

@Component({
  selector: 'rp-new',
  template: `
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <rp-form
          [h1Text]="'Añadir publicación'"
          [submitText]="'Añadir'"
          [publication]="publication"
          (recibo)="guardame($event)"
        >
        </rp-form>
    </div>
  </div>
  `,
  styles: []
})
export class NewPublication {

  public publication: Publication = new Publication;
  constructor() { }

  guardame(publication: Publication){
    console.log(publication);
  }

}
