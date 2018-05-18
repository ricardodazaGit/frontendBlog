import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { ComponentsModule } from './lib/components/components.module';
import { PublicationsComponent } from './views/publications/publications.component';
import { PublicDetail } from './views/publications/public-detail.component';
import { PublicListComponent } from './views/publications/public-list.component';
import { NewPublication } from './views/publications/new.component';
import { FormComponent } from './views/publications/form/form.component';
import { HttpModule } from '@angular/http';

//Services
import { PublicationsService } from './views/publications/publications.service';

//Pipes
import { LimiteCaracteresPipe } from './pipes/limite-caracteres.pipe';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationsComponent,
    PublicListComponent,
    PublicDetail,
    NewPublication,
    FormComponent,
    LimiteCaracteresPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PublicationsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
