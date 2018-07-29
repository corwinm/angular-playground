import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: 'grid', loadChildren: '../lazy/lazy.module#LazyModule' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
