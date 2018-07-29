import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { NavigationModule } from './navigation/navigation.module';
import { UpdateAvailableComponent } from './update-available/update-available.component';
import { HomeModule } from './home/home.module';
import { RouterTransitionsComponent } from './router-transitions/router-transitions.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateAvailableComponent,
    RouterTransitionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    NavigationModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
