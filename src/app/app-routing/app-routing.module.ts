import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PictureGridComponent } from '../picture-grid/picture-grid.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
