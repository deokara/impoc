import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Area } from '../models/area';

@Injectable()
export class AreaService {
  private selectedAreaSource = new BehaviorSubject<Area>(new Area());
  selectedArea = this.selectedAreaSource.asObservable();

  constructor(
    private httpClient: HttpClient) { }
    
  // ToDo Function has to return list of area models
  getAreas(): Observable<Area[]> {
    const areaUri = 'https://devcust.e-paycapita.com/newaim/api/areas';

    return this.httpClient.get<Area[]>(areaUri);
  }

  setSelectedArea(area: Area): void {
    this.selectedAreaSource.next(area);
  }

}
