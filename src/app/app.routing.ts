import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { PublicDetail } from './views/publications/public-detail.component';
import { ContactComponent } from './views/contact/contact.component';
import { WaitPublicationsComponent } from './views/waits/waits.component';
import { WaitDetail } from './views/waits/waits-detail.component';

const routes: Routes = [
  
  {
    path:"",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"publications",
    component: PublicationsComponent
  },
  {
    path:"publications/:id",
    component: PublicDetail
  },
  {
    path:"esperasDelJabali",
    component: WaitPublicationsComponent
  },
  {
    path:"esperasDelJabali/:id",
    component: WaitDetail
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path:"**",
    redirectTo:"/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
