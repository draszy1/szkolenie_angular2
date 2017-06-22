import { Bookmark } from './bookmarks.models';
import { BookmarksService } from './bookmarks.service';
import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[maMarkBookmarked]'
})
export class MarkBookmarkedDirective {
  @Input('maMarkBookmarked') item: Bookmark; // tslint:disable-line:no-input-rename
  @HostBinding('class.opaque') opaque = false;

  constructor(private bs: BookmarksService) {
  }

  @HostBinding('class.bookmarked')
  get isBookmarked() {
    return this.bs.has(this.item.id);
  }

  @HostListener('click', ['2', '$event.target'])
  toggleOpaque(index: number, target: HTMLElement) {
    const clickable = ['BUTTON', 'A'].some(name => name === target.nodeName);

    if (clickable) {
      console.log('clickabled');
      return;
    }

    this.opaque = !this.opaque;
  }

}
