import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLogin } from '../model/user-login';
import { JwtDto } from '../model/jwt-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL: string = 'http://localhost:8080/excercise/auth';

  constructor(private _httpClient: HttpClient) { }

  public login(userLogin: UserLogin): Observable<JwtDto>{
    return this._httpClient.post<JwtDto>(this.authURL + '/login', userLogin);
  }
}
