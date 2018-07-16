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

  // tslint:disable-next-line:max-line-length
  codeBuildUrl = 'https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiaDJBalRXU0ZsMktSN2dRN0tCVkxMUGU1dVhLTFQrdHlZM1A3N3ZoRHBTTUpLYWQ0Tmc0UHdHeFJzWHl6ZXZyS0xzb0FVU0xIdFV6ZUsvWWNlTU1NN2tZPSIsIml2UGFyYW1ldGVyU3BlYyI6Imt5SjVtSWJQL1MyVFBQVjMiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master';

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
