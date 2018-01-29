import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LogService } from '../../../shared/index';
import { LocalstorageService } from '../../../shared/index';


@Injectable()
export class AuthenticationService {

  constructor(
    private logService: LogService,
    private localstorageService: LocalstorageService,
    private httpClient: HttpClient) { }

  login(username: string, password: string): boolean {
    /*return this.httpClient.post<any>('/api/login', { username: username, password: password })
      .map(token => {
        if (token) {
          localStorageService.setUserToken(JSON.stringify(token));
          return true;
        }
        return false;
      });*/

      this.localstorageService.setUserToken('temptoken');
      const token = this.localstorageService.getUserToken();
      return true;
  }

  logout(): boolean {
    // localStorageService.removeUserToken();
    return true;
  }
}
