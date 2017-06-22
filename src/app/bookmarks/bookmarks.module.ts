import { BookmarksService } from './bookmarks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { RemoveBookmarkComponent } from './remove-bookmark/remove-bookmark.component';
import { MarkBookmarkedDirective } from './mark-bookmarked.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddBookmarkComponent, RemoveBookmarkComponent, MarkBookmarkedDirective],
  providers: [BookmarksService],
  exports: [AddBookmarkComponent, RemoveBookmarkComponent, MarkBookmarkedDirective]
})
export class BookmarksModule { }
