import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

   url: String;

  constructor(private _http: HttpClient){ 
    this.url = "http://localhost:8080/excercise/auth";
  }

  addUser(user:User){
    return this._http.post<User>(this.url + '/create', user);
  }

}

