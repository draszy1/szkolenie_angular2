import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Episode } from './../spotify.models';
import { TvmazeService } from '../tvmaze.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

interface ShowDetailsParams {
  id: number;
}

@Injectable()
export class EpisodesResolver implements Resolve<Episode[]> {
  constructor(private tv: TvmazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Episode[]> {
    const id = (route.params as ShowDetailsParams).id;
    return this.tv.getShowEpisodes(id);
  }
}
