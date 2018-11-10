import { catchError } from 'rxjs/operators';

import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError as observableThrowError } from 'rxjs';
import { SessionService } from './services/session.service';
// import { ToastrService } from 'ngx-toastr';
// import { SessionService } from './services/session.service';
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private session: SessionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'http://localhost:5000/api' + req.url;
    const auth = this.session.getItem('easy-hotel-auth');
    const token = auth ? auth['token'] : '';
    // const header = req.headers.set('Authorization', `Bearer ${token}`);
    // header.set('Content-Type', `application/x-www-form-urlencoded`);
    const cloneReq = req.clone({ url: url });

    return next.handle(cloneReq).pipe(
      catchError((error, caught) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 500) {
            // this.toastr.warning(error.message);
          } else if (error.status === 404) {
            // this.toastr.warning('404 - Serviço não encontrado');
          } else {
            // this.toastr.warning(error.error.message);
          }
        }
        return observableThrowError(error.error);
      })
    ) as any;
  }
}
