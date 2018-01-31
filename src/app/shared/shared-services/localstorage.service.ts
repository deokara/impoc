import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  private TOKEN_KEY = 'userToken';

  setUserToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getUserToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeUserToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
