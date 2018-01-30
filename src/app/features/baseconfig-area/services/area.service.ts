import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AreaService {

  constructor(
    private httpClient: HttpClient) { }
    
  // ToDo Function has to return list of area models
  getAreas() {
    const areaUri = 'https://devcust.e-paycapita.com/newaim/api/areas';

    return this.httpClient.get(areaUri);
  }

}
