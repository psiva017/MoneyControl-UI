import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreService } from './store.service';
import { SharedService } from './shared.service';

const routes: Routes = [
  {
    path: "dashboard", component: DashboardComponent
  }, {
    path: "login", component: LoginComponent
  }, {
    path: "signup", component: SignupComponent
  },
  {
    path: "**", redirectTo: "login"
  }, {
    path: "", component: LoginComponent, pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StoreService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
