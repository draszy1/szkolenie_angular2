import { AuthGuard } from './auth.guard';
import { EpisodesResolver } from './spotify/show-details/episodes.resolver';
import { ShowResolver } from './spotify/show-details/show.resolver';
import { ShowDetailsComponent } from './spotify/show-details/show-details.component';
import { Page404Component } from './page-404/page-404.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './spotify/search/search.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'spotify',
    component: SearchComponent
  },
  {
    path: 'spotify/:id',
    component: ShowDetailsComponent,
    resolve: {
      show: ShowResolver,
      episodes: EpisodesResolver
    },
    // data: {
    //   abc: 'aad'
    // }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
