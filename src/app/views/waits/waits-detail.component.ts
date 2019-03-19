import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { WaitPublication } from './wait-publication';
import { WaitsService } from './waits.service';

@Component({
  selector: 'rp-waitdetail',
  templateUrl: './waits-detail.component.html',
  styles: []
})
export class WaitDetail implements OnInit {

  wait: WaitPublication;
  _id: number;
  waitNotExits: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _waitsService: WaitsService
  ) { }

  private obtainParamId(params: Params){
    this._id = params['id'];
  }

  private obtainWaitingList(){
    this._waitsService.getWaitPublicationsList$()
      .subscribe(waits => {
        for(let i in waits){
          if(waits[i].id.toString() === this._id){
            this.loadWaitingDetail(waits[i]);
          }
        }
        this.redirectIfWaitNotExits();
      });
  }

  private loadWaitingDetail(wait: any){
    this.wait = wait;
    this.waitNotExits = false;
    document.title = wait.titlePost + ". Esperas del jabalí";
  }

  private redirectIfWaitNotExits(){
    if(this.waitNotExits) {
      this._router.navigate(["/esperasDelJabali"]);
    }
  }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this.obtainParamId(params);
        this.obtainWaitingList();
      });
  }

}
