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
import { WaitPublicationsComponent } from './views/waits/waits.component';
import { WaitPublicListComponent } from './views/waits/wait-list.component';
import { WaitDetail } from './views/waits/waits-detail.component';
import { HttpModule } from '@angular/http';

//Services
import { PublicationsService } from './views/publications/publications.service';
import { WaitsService } from './views/waits/waits.service';

//Pipes
import { LimiteCaracteresPipe } from './pipes/limite-caracteres.pipe';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicationsComponent,
    PublicListComponent,
    PublicDetail,
    NewPublication,
    ContactComponent,
    FormComponent,
    LimiteCaracteresPipe,
    WaitPublicationsComponent,
    WaitPublicListComponent,
    WaitDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PublicationsService, WaitsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
