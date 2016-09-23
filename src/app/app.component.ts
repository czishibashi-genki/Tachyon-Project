import { Component, NgZone } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
  userDisplayName = "empty";
  title = 'app works!';

  constructor(private googleClient: GoogleApiService) {}

  ngAfterViewInit() {
    // this.googleClient.renderLoginButton(this.googleLoginButtonId,
    //   (loggedInUser) => {
    //     this.userDisplayName = loggedInUser.getBasicProfile().getName();
    //     // let url = "https://sheets.googleapis.com/v4/spreadsheets/1WHH8Pclu134WOmxFgLdYWBvYBjDJDpsGDstq78D9j8g/values/A1";
    //     // this.googleClient.get(url).subscribe();
    //   }
    // );
  }

  logout() {
    this.googleClient.logout();
  }
}
