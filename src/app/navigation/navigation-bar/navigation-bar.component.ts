import { Component, OnInit } from '@angular/core';
import { Version } from 'src/version';

@Component({
  selector: 'pg-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  buildNumber = Version.number;

  showMenu = false;
  promptEvent: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  installPwa() {
    this.promptEvent.prompt();
  }
}
