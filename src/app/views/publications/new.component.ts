import { Component } from '@angular/core';
import { Publication } from './publication';
import { PublicationsService } from './publications.service';
import { Router } from '@angular/router';

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
  constructor(
    private publicationService: PublicationsService,
    private router: Router
  ) { }

  guardame(publication: Publication){
    this.publicationService.addOrUpdatePublication$(publication)
      .subscribe(() => {
        this.router.navigate(['/publications']);
      });
  }

}
