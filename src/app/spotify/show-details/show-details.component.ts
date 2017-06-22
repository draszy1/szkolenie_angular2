import { Episode } from './../spotify.models';
import { Show } from '../spotify.models';
import { TvmazeService } from '../tvmaze.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ma-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  show: Show;
  episodes: Episode[] = [];
  uppercase = false;

  constructor(private route: ActivatedRoute) {
    this.show = route.snapshot.data.show;
    this.episodes = route.snapshot.data.episodes;
  }

  ngOnInit() {
  }

}
