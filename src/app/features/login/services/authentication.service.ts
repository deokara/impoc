import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient) { }

  login(user: User) {
    const loginUri = 'https://devcust.e-paycapita.com/newaim//api/token';

    return this.httpClient.post(loginUri, {
      ConsortiumCode: user.consortiumCode,
      LoginName: user.name,
      Password: user.password
    });
  }
}
