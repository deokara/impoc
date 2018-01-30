import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaService } from './services/area.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AreaListComponent],
  providers: [AreaService]
})
export class BaseconfigAreaModule { }
