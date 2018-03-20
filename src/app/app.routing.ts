import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "publications",
    loadChildren: "./views/publications/publications.module#PublicationsModule"
  },
  {
    path: "404",
    component: NotFoundComponent
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
