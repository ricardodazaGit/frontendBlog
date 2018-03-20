import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRouting } from './publications.routing';
import { PublicationsComponent } from './publications.component';
import { ListComponent } from './list.component';
import { NewPublication } from './new.component';
import { PublicDetail } from './public-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PublicationsRouting
  ],
  declarations: [PublicationsComponent, ListComponent, NewPublication, PublicDetail]
})
export class PublicationsModule { }
