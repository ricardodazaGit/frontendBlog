import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Publication } from '../publication';

@Component({
  selector: 'rp-form',
  templateUrl: './form.component.html',
  styles: [
    `
    .btn-primary {
      background-color: #006600
    }
    `
  ]
})
export class FormComponent {

  @Input() h1Text: string;
  @Input() submitText: string;
  @Input() publication: Publication;
  @Output() recibo: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  submit() {
    this.recibo.emit(this.publication);
  }

}
