import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientInterceptorService implements HttpInterceptor{

  constructor(private _tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let interReq = req;
    const token = this._tokenService.getToken();
    
    if(token != null){
      interReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    } 

    return next.handle(interReq);
  }
}

export const InterceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: ClientInterceptorService, multi: true}];
