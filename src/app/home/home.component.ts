import { version } from '../../environments/environment';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'My';
  @Output() timePassed = new EventEmitter<number>();
  message = version;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.timePassed.emit(+new Date());
    }, 2000);
  }

}
