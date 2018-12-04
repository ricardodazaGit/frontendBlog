import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private _route: ActivatedRoute,
    private _waitsService: WaitsService
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => {
        this._id = params['id'];
        this._waitsService.getWaitPublicationsList$()
          .subscribe(waits => {
            //this.publication = publication;
            for(let i in waits){
              if(waits[i].id.toString() === this._id){
                this.wait = waits[i];
              }
            }
          });
      });
  }

}
