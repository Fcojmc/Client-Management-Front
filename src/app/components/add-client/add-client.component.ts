import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { TokenService } from '../../services/token.service';
import { Client } from '../../model/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  newClient: Client;
  isLogged: boolean = false;

  constructor(
    private _clientService: ClientService,
    private _tokenService: TokenService,
    private router: Router
  ) { 
    this.newClient = new Client();
  }

  ngOnInit(){
    if(this._tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onSubmit(form){
    
    this._clientService.addClient(this.newClient).subscribe(
      response =>{
        alert("Client created");
        this.router.navigate(["/home"]);
      },
      error =>{
        alert('Fill all the required inputs');
      }
    );
  }
}
