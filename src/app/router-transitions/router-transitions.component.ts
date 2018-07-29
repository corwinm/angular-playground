import { Component, OnInit, Input, ContentChild } from '@angular/core';
import {
  query,
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

const fadeAnimation = trigger('slideAnimation', [

  // The '* => *' will trigger the animation to change between any two states
  transition('* => back', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':leave',
      [
        style({ 'z-index': 10 }),
        animate(0.3)
      ],
      {
        optional: true
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0)', 'z-index': 10 }),
        animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ],
      { optional: true }
    )
  ]),
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [
        animate(0.3),
        style({ transform: 'translateX(100%)', 'z-index': 10 })
      ],
      {
        optional: true
      }
    ),
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)', 'z-index': 10 }),
        animate('.5s ease-in-out', style({ transform: 'translateX(0)' }))
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        style({ opacity: 100 }),
        animate('.5s ease-in-out', style({ opacity: 0 }))
      ],
      { optional: true }
    )
  ])
]);

@Component({
  selector: 'pg-router-transitions',
  templateUrl: './router-transitions.component.html',
  styleUrls: ['./router-transitions.component.scss'],
  animations: [fadeAnimation]
})
export class RouterTransitionsComponent implements OnInit {

  @ContentChild(RouterOutlet) outlet: RouterOutlet;

  constructor(private location: PlatformLocation) {
  }

  ngOnInit() {
    if (!this.outlet) {
      console.error('RouterTransitionsComponent must contain a child RouterOutlet');
      return;
    }
    this.location.onPopState(locationChange => {
      console.log('back button pressed', locationChange);
    });
  }

  routeState() {
    return this.outlet && this.outlet.isActivated ? this.outlet.activatedRoute : '';
  }
}
