import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { NavigationMenuComponent } from './navigation/navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { NavigationButtonComponent } from './navigation/navigation-button/navigation-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavigationMenuComponent,
    NavigationItemComponent,
    HomeComponent,
    NavigationButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
