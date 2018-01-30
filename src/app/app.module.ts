import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FrameworkComponentsModule } from './framework/index';
import { SharedServicesModule } from './shared/index';
import { JwtInterceptor } from './shared/index';
import { LoginModule } from './features/login/index';
import { HomeModule } from './features/home/index';
import { BaseconfigAreaModule } from './features/baseconfig-area/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FrameworkComponentsModule,
    SharedServicesModule,
    LoginModule,
    HomeModule,
    BaseconfigAreaModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
