import { BookmarksService } from './../../bookmarks/bookmarks.service';
import { TvmazeService } from './../tvmaze.service';
import { Show, ShowData } from './../spotify.models';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shows: Show[] = [];
  query = 'batman';
  searchForm: FormGroup;

  constructor(private tv: TvmazeService,
              private fb: FormBuilder,
              private bs: BookmarksService) {
    this.search(this.query);

    // const queryControl = fb.control({value: ''});

    this.searchForm = fb.group({
      query: [this.query, Validators.required]
    });

    this.searchForm.valueChanges
      .map(({query}) => query)
      .debounceTime(200)
      .subscribe(query => this.search(query));
  }

  search(query: string) {
    this.tv.findShows(query)
      .subscribe(shows => this.shows = shows);
  }

  saveBookmark(show: Show) {
    this.bs.add(show);
  }

  isBookmarked(show: Show): boolean {
    return this.bs.has(show.id);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }

  ngOnInit() {
  }

}
