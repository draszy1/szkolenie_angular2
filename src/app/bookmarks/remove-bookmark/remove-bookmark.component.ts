import { BookmarksService } from './../bookmarks.service';
import { Bookmark } from './../bookmarks.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-remove-bookmark',
  templateUrl: './remove-bookmark.component.html',
  styleUrls: ['./remove-bookmark.component.scss']
})
export class RemoveBookmarkComponent {
  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) { }

  remove() {
    this.bs.remove(this.item.id);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }

}
