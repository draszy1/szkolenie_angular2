import { Show } from '../spotify.models';
import { Component, OnChanges, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { get } from 'lodash';

export type PosterSize = 'md' | 'lg';

@Component({
  selector: 'ma-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterComponent implements OnChanges {
  @Input() tvShow: Show;
  @Input() size: PosterSize;
  imgUrl: string;
  private placeholder = 'http://static.tvmaze.com/uploads/images/original_untouched/117/293594.jpg';

  ngOnChanges() {
    const urlPath = this.size === 'lg' ? 'image.original' : 'image.medium';
    this.imgUrl = get<string>(this.tvShow, urlPath, this.placeholder);

    // const sizeKey = this.size === 'lg' ? 'original' : 'medium';
    // this.imgUrl = get(this.tvShow, ['image', sizeKey], this.placeholder);
  }

}
