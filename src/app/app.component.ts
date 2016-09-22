import { Component, NgZone } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './user-info';
declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  googleLoginButtonId = "google-login-button";
  userAuthToken = null;
  userDisplayName = "empty";
  title = 'app works!';
  zone: NgZone;
  user: UserInfo;

  constructor(private zone: NgZone, private http: Http) {
    this.zone = zone;
  }

  // Angular hook that allows for interaction with elements inserted by the
  // rendering of a view.
  ngAfterViewInit() {
    // Converts the Google login button stub to an actual button.
    gapi.signin2.render(
      this.googleLoginButtonId,
      {
        "onSuccess": this.onGoogleLoginSuccess,
        "scope": "profile"
      }
    );
  }

  // Triggered after a user successfully logs in using the Google external
  // login provider.
  onGoogleLoginSuccess = (loggedInUser) => {
    this.zone.run(() =>{
      console.log(loggedInUser);
      this.userAuthToken = loggedInUser.getAuthResponse().access_token;
      // this.userAuthToken = loggedInUser.getAuthResponse().id_token;
      this.userDisplayName = loggedInUser.getBasicProfile().getName();
      console.log(this);
      // console.log(this.http);
      let url = 'https://sheets.googleapis.com/v4/spreadsheets/1BDTRWHQ8az5E4XxvBd9rJsQPIGyqz7HqTEKQ8n0PAOo/values/A1';
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.userAuthToken });
      let options = new RequestOptions({ headers: headers});
      this.http.get(url, options).subscribe()
    });
  }

  logout() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(()=>{
      console.log('logout');
    });
  }

  reload() {
      console.log("reloadddddddddddd");
  }
}
