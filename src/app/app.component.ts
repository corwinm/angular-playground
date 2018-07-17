import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';

  updateAvailable = false;

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(() => {
      this.updateAvailable = true;
    });
  }
}
