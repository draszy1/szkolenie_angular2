import { Injectable } from '@angular/core';
import { TvmazeService } from '../tvmaze.service';
import { Observable } from 'rxjs/Observable';
import { Show } from '../spotify.models';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

interface ShowDetailsParams {
  id: number;
}

@Injectable()
export class ShowResolver implements Resolve<Show> {
  constructor(private tv: TvmazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Show> {
    const id = (route.params as ShowDetailsParams).id;
    return this.tv.getShow(id);
  }
}
