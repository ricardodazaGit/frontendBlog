import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CookPublication } from './cook-publication';
import { CookService } from './cooks.service';

@Component({
  selector: 'rp-cookDetail',
  templateUrl: './cooks-detail.component.html',
  styles: []
})
export class CookDetail implements OnInit {

  cook: CookPublication;
  _id: number;
  cookNotExits: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _cookService: CookService
  ) { }

  private obtainParamId(params: Params){
    this._id = params['id'];
  }

  private obtainCookingList(){
    this._cookService.getCookPublicationsList$()
      .subscribe(cooks => {
        for(let i in cooks){
          if(cooks[i].id.toString() === this._id){
            this.loadCookingDetail(cooks[i]);
          }
        }
        this.redirectIfCookNotExits();
      });
  }

  private loadCookingDetail(cook: any){
    this.cook = cook;
    this.cookNotExits = false;
    document.title = cook.titlePost + ". Cocina con nosotros";
  }

  private redirectIfCookNotExits(){
    if(this.cookNotExits) {
      this._router.navigate(["/cocina"]);
    }
  }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this.obtainParamId(params);
        this.obtainCookingList();
      });
  }

}
