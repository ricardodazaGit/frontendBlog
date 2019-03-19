import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { PublicationsService } from './publications.service';
import { Publication } from './publication';

@Component({
  selector: 'rp-list',
  templateUrl: './public-list.component.html',
  styles: [
    `
    .btn-outline-primary {
      color: #752717;      
      background-color: transparent;
      background-image: none;
      border-color: #752717;
  }
  .btn-outline-primary:hover {
    background-color:#752717;
    color: white;
  }
  .btn-outline-primary:focus {
    background-color:#752717;
    color: white;
  }
    `
  ]
})
export class PublicListComponent implements OnInit {

  publications: Publication[] = [];

  constructor(
    private _publicService: PublicationsService,
    private _router: Router
  ) { }

  private orderPublicationsById(){
    this.publications.sort((a, b) => {
      if (a.id > b.id) return -1;
      else if (a.id < b.id) return 1;
      else return 0;
    });
  }

  showDetail(_id: number) {
    this._router.navigate(['/publications',_id]);
  }

  ngOnInit() {
    this._publicService.getPublicationsList$()
    .subscribe(publications => {
      this.publications = publications;
      this.orderPublicationsById();
      document.title= "Perdiz con reclamo: Blog de Joselito";
    });
  }
}
