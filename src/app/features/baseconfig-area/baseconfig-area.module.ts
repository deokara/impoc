import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaService } from './services/area.service';
import { AreaDetailsComponent } from './components/area-details/area-details.component';
import { AreaPageComponent } from './components/area-page/area-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AreaListComponent, AreaDetailsComponent, AreaPageComponent],
  providers: [AreaService]
})
export class BaseconfigAreaModule { }
