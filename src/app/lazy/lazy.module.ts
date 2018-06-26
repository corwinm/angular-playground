import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { PictureGridComponent } from '../picture-grid/picture-grid.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [
    PictureGridComponent
  ]
})
export class LazyModule { }
