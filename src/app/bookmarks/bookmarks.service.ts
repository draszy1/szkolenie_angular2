import { Bookmark, BookmarkId } from './bookmarks.models';
import { Injectable } from '@angular/core';
import { remove } from 'lodash';

@Injectable()
export class BookmarksService {
  private items: Bookmark[] = [];

  constructor() { }

  getAll(): Bookmark[] {
    return [...this.items];
  }

  add(item: Bookmark): void {
    this.items.push(item);
  }

  remove(bookmarkId: BookmarkId): void {
    // this.items = this.items.filter(({id}) => id !== bookmarkId);
    remove(this.items, {id: bookmarkId});
  }

  has(bookmarkId: BookmarkId): boolean {
    return this.items.some(({id}) => id === bookmarkId);
  }
}
