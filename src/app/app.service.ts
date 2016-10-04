import { Injectable } from '@angular/core';
import { UserInfo } from './domains/user-info';

@Injectable()
export class AppService {
  loggedInUser: UserInfo;
  constructor() {}
}
