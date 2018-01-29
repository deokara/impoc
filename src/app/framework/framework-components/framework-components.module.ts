import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppFrameComponent } from './app-frame/app-frame.component';
import { PageFrameComponent } from './page-frame/page-frame.component';
import { ViewFrameComponent } from './view-frame/view-frame.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppFrameComponent, PageFrameComponent, ViewFrameComponent],
  exports: [AppFrameComponent]
})
export class FrameworkComponentsModule { }
