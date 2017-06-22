import { EpisodesResolver } from './show-details/episodes.resolver';
import { ShowResolver } from './show-details/show.resolver';
import { RouterModule } from '@angular/router';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { TvmazeService } from './tvmaze.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PosterComponent } from './poster/poster.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { EpisodePipe } from './episode.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BookmarksModule
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodePipe],
  providers: [TvmazeService, ShowResolver, EpisodesResolver]
})
export class SpotifyModule { }
