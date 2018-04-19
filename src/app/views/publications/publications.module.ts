import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRouting } from './publications.routing';
import { PublicationsComponent } from './publications.component';
import { PublicListComponent } from './public-list.component';
import { NewPublication } from './new.component';
import { PublicDetail } from './public-detail.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicationsService } from './publications.service';

//Pipes
import { LimiteCaracteresPipe } from '../../pipes/limite-caracteres.pipe';

@NgModule({
  imports: [
    CommonModule,
    PublicationsRouting,
    FormsModule,
    HttpModule
  ],
  declarations: [
    PublicationsComponent, 
    PublicListComponent, 
    NewPublication, 
    PublicDetail, 
    FormComponent,
    LimiteCaracteresPipe
   ],
  providers: [ PublicationsService ]
})
export class PublicationsModule { }
