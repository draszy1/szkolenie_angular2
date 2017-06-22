import { BookmarksService } from './../bookmarks.service';
import { Bookmark } from './../bookmarks.models';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent {
  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) { }

  save() {
    this.bs.add(this.item);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }

}
