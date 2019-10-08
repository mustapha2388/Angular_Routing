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


const appRoutes: Routes = [
  {path:"appareils", component:AppareilViewComponent},
  {path: "", component: AppareilViewComponent},
  {path:"auth", component:AuthComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AppareilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
