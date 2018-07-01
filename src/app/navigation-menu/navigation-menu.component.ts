import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'pg-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    trigger('loadedState', [
      transition(':enter', [
        style({ left: -300 }),
        animate('0.2s ease', style({ left: 0 }))
      ]),
      state('in', style({left: '*'})),
      transition(':leave', [
        style({ left: '*' }),
        animate(200, style({ left: -300 })),
        animate(50, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavigationMenuComponent {

  @Input() closed = true;
  @Output() closedChange = new EventEmitter();

  shadowClicked() {
    this.closed = false;
    this.closedChange.emit();
  }
}
