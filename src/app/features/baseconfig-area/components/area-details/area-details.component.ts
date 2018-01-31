import { Component, OnInit } from '@angular/core';

import { AreaService } from '../../services/area.service';
import { LogService } from '../../../../shared/index';
import { Area } from '../../models/area';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.css']
})
export class AreaDetailsComponent implements OnInit {
  area: Area;

  constructor(
    private areaService: AreaService,
    private logService: LogService) { }

  ngOnInit() {
    this.areaService.selectedArea.subscribe(area => this.area = area);
  }
}
