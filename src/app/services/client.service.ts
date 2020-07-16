import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Client } from '../model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: String;


  constructor(
    private _http: HttpClient
  ) { 
    this.url = "http://localhost:8080/excercise/clients";
  }

  addClient(client: Client){
    return this._http.post<Client>(this.url + '/create', client);
  }

  clientsList(): Observable<Client[]>{
    return this._http.get<Client[]>(this.url + '/list');
  }

  getClientById(id: number): Observable<any>{
    return this._http.get<any>(this.url + `/${id}`);
  }

  updateClient(id: number, client: Client){
    return this._http.put<any>(this.url + `/update/${id}`, client);
  }

  deleteClient(id: number): Observable<any> {
    return this._http.delete<any>(this.url + '/delete/' + id);
  }
}
