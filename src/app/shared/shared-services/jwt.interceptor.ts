import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LocalstorageService } from './localstorage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private localstorageService: LocalstorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUserToken = JSON.parse(this.localstorageService.getUserToken());
        if (currentUserToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUserToken}`
                }
            });
        }

        return next.handle(request);
    }
}
