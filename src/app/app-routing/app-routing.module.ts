import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureGridComponent } from '../picture-grid/picture-grid.component';

const appRoutes: Routes = [
  { path: '', component: PictureGridComponent },
  { path: 'grid', component: PictureGridComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
