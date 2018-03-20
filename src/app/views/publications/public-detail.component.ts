import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rp-publicdetail',
  template: `
    <p>detail works!</p>
    <h3>{{_id}}</h3>
  `,
  styles: []
})
export class PublicDetail implements OnInit {

  _id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
  }

}
