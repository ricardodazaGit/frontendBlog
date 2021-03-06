import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { WaitsService } from './waits.service';
import { WaitPublication } from './wait-publication';

@Component({
  selector: 'rp-waitlist',
  templateUrl: './wait-list.component.html',
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
export class WaitPublicListComponent implements OnInit {

  waitPublications: WaitPublication[] = [];

  constructor(
    private _waitsService: WaitsService,
    private _router: Router
  ) { }

  private orderWaitingsById(){
    this.waitPublications.sort((a, b) => {
      if (a.id > b.id) return -1;
      else if (a.id < b.id) return 1;
      else return 0;
    });
  }

  showDetail(_id: number) {
    this._router.navigate(['/esperasDelJabali',_id]);
  }

  ngOnInit() {
    this._waitsService.getWaitPublicationsList$()
    .subscribe(waits => {
      this.waitPublications = waits;
      this.orderWaitingsById();
      document.title = "Esperas del jabalí: Blog de Joselito"
    });
  }
}
