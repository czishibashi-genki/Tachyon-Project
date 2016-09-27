export class UserInfo {
  name: string;
  email: string;
  token: string;
  constructor(name, email, token){
    this.name = name || 'empty';
    this.email = email || '';
    this.token = token;
  };
}
