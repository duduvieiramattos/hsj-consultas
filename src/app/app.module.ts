import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { StartComponent } from './start/start.component'
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "/login", pathMatch:"full"},
  {path: "start", component: StartComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    StartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
