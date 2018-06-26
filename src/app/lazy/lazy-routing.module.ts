import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureGridComponent } from '../picture-grid/picture-grid.component';

const routes: Routes = [
  { path: '', component: PictureGridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
