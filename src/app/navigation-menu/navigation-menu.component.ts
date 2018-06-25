import { Component, OnInit, AfterViewInit, EventEmitter, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'pg-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, AfterViewInit {

  @Output() close = new EventEmitter();

  // TODO: Use Angular animations
  @HostBinding('class.loaded') loaded = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.loaded = true, 20);
  }

  shadowClicked() {
    this.loaded = false;
    setTimeout(() => this.close.emit(), 320);
  }
}
