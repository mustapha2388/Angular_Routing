import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { FormsModule } from "@angular/forms";
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes: Routes = [
  {path:"appareils", component:AppareilViewComponent},
  {path: "", component: AppareilViewComponent},
  {path:"auth", component:AuthComponent},
  {path: "appareils/:id", component: SingleAppareilComponent},
  {path:"not-found", component: NotFoundComponent},
  {path:"**", redirectTo:"not-found"}
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
