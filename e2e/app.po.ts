import { browser, by, element } from 'protractor';

export class MusicAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ma-root h1')).getText();
  }
}
