import { Component, OnInit } from '@angular/core';

import { debounce } from 'rxjs/operators';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'pg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appleInstalled = (navigator as any).standalone;
  screenResize = fromEvent(window, 'resize');
  mobile = this.isMobile();

  constructor() { }

  ngOnInit() {
    this.screenResize
      .pipe(debounce(() => interval(200)))
      .subscribe(value => {
        this.mobile = this.isMobile();
      });
  }

  isMobile() {
    return window.innerWidth < 600;
  }
}
