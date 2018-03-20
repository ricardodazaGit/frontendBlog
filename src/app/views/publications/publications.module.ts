import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRouting } from './publications.routing';
import { PublicationsComponent } from './publications.component';
import { ListComponent } from './list.component';
import { NewPublication } from './new.component';
import { PublicDetail } from './public-detail.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PublicationsRouting,
    FormsModule
  ],
  declarations: [PublicationsComponent, ListComponent, NewPublication, PublicDetail, FormComponent ]
})
export class PublicationsModule { }
