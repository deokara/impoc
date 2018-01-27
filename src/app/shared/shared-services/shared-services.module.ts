import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogService } from './log.service';
import { LocalstorageService } from './localstorage.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LogService, LocalstorageService]
})
export class SharedServicesModule { }
