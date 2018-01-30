import { Component, OnInit } from '@angular/core';

import { AreaService } from '../../services/area.service';
import { LogService } from '../../../../shared/index';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  data: string;

  constructor(
    private areaService: AreaService,
    private logService: LogService) { }

  ngOnInit() {
    this.areaService.getAreas()
    .subscribe(
      res => {
        this.data = JSON.stringify(res);
        this.logService.logInfo('Got areas ' + this.data);
      },
      err => {
        this.logService.logInfo('Error');
      }
    );
  }
}
