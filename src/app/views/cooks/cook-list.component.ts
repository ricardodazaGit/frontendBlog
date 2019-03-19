import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { CookService } from './cooks.service';
import { CookPublication } from './cook-publication';

@Component({
  selector: 'rp-cookList',
  templateUrl: './cook-list.component.html',
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
export class CookListComponent implements OnInit {

  cookPublications: CookPublication[] = [];

  constructor(
    private _cookService: CookService,
    private _router: Router
  ) { }

  private orderCookingById(){
    this.cookPublications.sort((a, b) => {
      if (a.id > b.id) return -1;
      else if (a.id < b.id) return 1;
      else return 0;
    });
  }

  showDetail(_id: number) {
    this._router.navigate(['/cocina',_id]);
  }

  ngOnInit() {
    this._cookService.getCookPublicationsList$()
    .subscribe(cooks => {
      this.cookPublications = cooks;
      this.orderCookingById();
      document.title = "Cocina con nosotros: Blog de Joselito"
    });
  }
}
