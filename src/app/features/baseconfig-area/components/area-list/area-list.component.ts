import { Component, OnInit } from '@angular/core';

import { AreaService } from '../../services/area.service';
import { LogService } from '../../../../shared/index';
import { Area } from '../../models/area';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: Area[];

  constructor(
    private areaService: AreaService,
    private logService: LogService) { }

  ngOnInit() {
    this.areaService.getAreas()
    .subscribe(
      areas => {
        this.areas = areas;
        this.logService.logInfo('Got areas ' + JSON.stringify(areas));
      },
      err => {
        this.logService.logInfo('Error');
      }
    );
  }

  onSelect(area: Area): void {
    this.areaService.setSelectedArea(area);
  }
}
