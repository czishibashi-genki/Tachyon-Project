import { Injectable, NgZone } from '@angular/core';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
declare var gapi: any;

@Injectable()
export class GoogleApiService {
  loggedInUser: Object;
  options: RequestOptions;
  onSuccess: (loggedInUser: any) => void;
  constructor(private zone: NgZone, private http: Http) {
    this.zone = zone;
  }

  renderLoginButton(buttonId: string, onSuccess: (loggedInUser: any) => void) {
    this.onSuccess = onSuccess;
    gapi.signin2.render(buttonId, {
      'onSuccess': this.onLoginSuccess
    });
  }

  onLoginSuccess = (loggedInUser: any) => {
    console.log('succeeded login');
    this.loggedInUser = loggedInUser;
    this.zone.run(() => {
      let headers = new Headers({ 'Authorization': 'Bearer ' + loggedInUser.getAuthResponse().access_token});
      this.options = new RequestOptions({ headers: headers});
      this.onSuccess(loggedInUser);
    });
  }

  isAuthenticated() {
    return !this.loggedInUser;
  }

  logout() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('logout');
    });
  }


  get(url): Observable<any> {
    return this.http.get(url, this.options);
  }

  post(url, body) {
    return this.http.post(url, body, this.options);
  }

}
