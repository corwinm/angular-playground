import { Component, Input } from '@angular/core';

@Component({
  selector: 'pg-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent {

  @Input() route: String;
  @Input() label: String;
}
