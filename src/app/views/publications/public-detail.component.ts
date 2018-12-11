import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  publicationNotExits: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _publicService: PublicationsService
  ) { }

  private obtainParamId(params: Params){
    this._id = params['id'];
  }

  private obtainPublicationList(){
    this._publicService.getPublicationsList$()
      .subscribe(publications => {
        for(let i in publications){
          if(publications[i].id.toString() === this._id){
            this.loadPublicationDetail(publications[i]);
          }
        }
        this.redirectIfPublicationNotExits();
      });
  }

  private loadPublicationDetail(publication: any){
    this.publication = publication;
    this.publicationNotExits = false;
    document.title = publication.titlePost + ". Perdíz con reclamo";
  }

  private redirectIfPublicationNotExits(){
    if(this.publicationNotExits) {
      this._router.navigate(["/publications"]);
    }
  }

  ngOnInit() {
    this._route.params
    .subscribe(params => {
      this.obtainParamId(params);
      this.obtainPublicationList();
    });
  }

}
