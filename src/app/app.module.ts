import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RequestComponent } from './components/request/request.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component'
import { GoogleApiService } from './modules/google-api.service'
import { SpreadsheetClient } from './modules/spreadsheet-client.service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    GoogleApiService,
    SpreadsheetClient,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
