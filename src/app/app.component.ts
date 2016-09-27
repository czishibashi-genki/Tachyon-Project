import { Component, NgZone } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './user-info';
import { GoogleApiService } from './modules/google-api.service'
import { SpreadsheetClient } from './modules/spreadsheet-client.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})export class AppComponent {
  googleLoginButtonId = "google-login-button";
  title = 'app works!';
  user = new UserInfo('empty', '', '');

  constructor(private googleClient: GoogleApiService, private router: Router) {}

  ngAfterContentInit() {
    console.log('after content init');
  }
  ngAfterViewInit() {
    console.log('afterviewinit');
    this.googleClient.renderLoginButton(
      this.googleLoginButtonId,
      (loggedInUser) => {
        console.log('suscess');
        // console.log(loggedInUser.getBasicProfile());
        this.user = new UserInfo(
          loggedInUser.getBasicProfile().getName(),
          loggedInUser.getBasicProfile().getEmail(),
          loggedInUser.getAuthResponse().access_token
        )
        let link = ['/'];
        this.router.navigate(link);
      }
    )
  }

  logout() {
    this.googleClient.logout();
  }
}
