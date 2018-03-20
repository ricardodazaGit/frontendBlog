import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationsComponent } from './publications.component';
import { PublicDetail } from './public-detail.component';

const routes: Routes = [
  {
    path:"",
    component: PublicationsComponent
  },
  {
    path:":id",
    component: PublicDetail
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRouting { }
