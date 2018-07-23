import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { NavigationBackComponent } from './navigation-back/navigation-back.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavigationBarComponent,
    NavigationMenuComponent,
    NavigationItemComponent,
    NavigationButtonComponent,
    NavigationBackComponent
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationModule { }
