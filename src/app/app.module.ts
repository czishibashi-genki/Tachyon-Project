import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { UserComponent } from './user/user.component';
import { GoogleApiService } from './services/google-api.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    GoogleApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
