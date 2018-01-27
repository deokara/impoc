import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  constructor() { }

  setUserToken(token: string): void {
    localStorage.setItem('userToken', token);
  }

  getUserToken(): string {
    return localStorage.getItem('userToken');
  }

  removeUserToken(): void {
    localStorage.removeItem('userToken');
  }
}
