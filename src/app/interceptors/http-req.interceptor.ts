import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../servisi/loading.service';
import { finalize } from 'rxjs/operators';
@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  constructor(private loading:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    

    let token = localStorage.getItem('authToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    


    this.loading.pokaziLoader();
    return next.handle(request).pipe(finalize(() => {this.loading.sakrijLoader()}));
  }

}
