import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.token;
    if (token) {
      const modifiedReq = req.clone({
        headers: new HttpHeaders().append('Authorization', 'Bearer ' + token),
      });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }
}
