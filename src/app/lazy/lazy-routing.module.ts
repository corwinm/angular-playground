import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  { path: '', component: PictureGridComponent },
  { path: 'drag-and-drop', component: DragAndDropComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
