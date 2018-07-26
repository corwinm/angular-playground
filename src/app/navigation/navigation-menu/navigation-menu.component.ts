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
        style({ right: -300, opacity: 0  }),
        animate(100, style({ opacity: 1 })),
        animate('0.2s ease', style({ right: 0 }))
      ]),
      state('in', style({right: '*'})),
      transition(':leave', [
        style({ right: '*' }),
        animate(200, style({ right: -300 })),
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
