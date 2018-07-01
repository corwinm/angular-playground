import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [
    PictureGridComponent,
    DragAndDropComponent
  ]
})
export class LazyModule { }
