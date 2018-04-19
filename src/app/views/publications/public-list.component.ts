import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { PublicationsService } from './publications.service';
import { Publication } from './publication';

@Component({
  selector: 'rp-list',
  templateUrl: './public-list.component.html',
  styles: []
})
export class PublicListComponent implements OnInit {

  publications: Publication[] = [];

  constructor(
    private _publicService: PublicationsService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._publicService.getPublicationsList$()
    .subscribe(publications => {
      //this.publications = publications.data;
      console.log(publications);
      this.publications = publications;
    });
  }

  showDetail(_id: number) {
    this._router.navigate(['/publications',_id]);
  }

}
