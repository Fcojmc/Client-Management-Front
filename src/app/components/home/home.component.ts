import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { TokenService } from '../../services/token.service';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged: boolean = false;
  clients: Client[];

  constructor(
    private _tokenService: TokenService,
    private _clientService: ClientService,
    private router: Router
  ) {
    this.clients = new Array<Client>();
    
   }

  ngOnInit() {
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.getClients();
    }
  }

  getClients(){
    this._clientService.clientsList().subscribe(
      response => {
        this.clients = response;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
  
  deleteClient(id: number): void{
    this._clientService.deleteClient(id).subscribe(
      response =>{
        window.location.reload();
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
