import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  logInfo(info: string) {
    console.log(info);
  }

  logError(error: string) {
    console.log(error);
  }
}
