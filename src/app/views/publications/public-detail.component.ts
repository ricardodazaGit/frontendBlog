import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Publication } from './publication';
import { PublicationsService } from './publications.service';

@Component({
  selector: 'rp-publicdetail',
  templateUrl: './public-detail.component.html',
  styles: []
})
export class PublicDetail implements OnInit {

  publication: Publication;
  _id: number;

  constructor(
    private _route: ActivatedRoute,
    private _publicService: PublicationsService
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this._id = params['id'];
        this._publicService.getPublicationsList$()
          .subscribe(publications => {
            //this.publication = publication;
            for(let i in publications){
              if(publications[i].id.toString() === this._id){
                this.publication = publications[i];
                document.title = publications[i].titlePost + ". Perdíz con reclamo";
              }
            }
          });
      });
  }

}
