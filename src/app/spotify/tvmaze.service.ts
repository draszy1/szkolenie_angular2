import { ShowData, Show, Episode } from './spotify.models';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TvmazeService {
  private baseUrl = 'https://api.tvmaze.com/';

  constructor(private http: Http) { }

  findShows(query: string): Observable<Show[]> {
    const apiUrl = `${this.baseUrl}search/shows?q=${query}`;
    return this.http.get(apiUrl)
      .map((resp) => (resp.json() as ShowData[]).map(({show}) => show))
  }

  getShowEpisodes(id: number): Observable<Episode[]> {
    const apiUrl = `${this.baseUrl}shows/${id}/episodes`;
    return this.http.get(apiUrl)
      .map(resp => resp.json());
  }

  getShow(id: number): Observable<Show> {
    const apiUrl = `${this.baseUrl}shows/${id}`;
    return this.http.get(apiUrl)
      .map(resp => resp.json());
  }

}
