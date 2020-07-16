import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { TokenService } from '../../services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../model/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  isLogged: boolean = false;
  clientData: Client;


  constructor(
    private _tokenService: TokenService,
    private _clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 

  }

  ngOnInit(){
    if(this._tokenService.getToken()){
      this.isLogged = true;
      const id = this.activatedRoute.snapshot.params.id;
      this._clientService.getClientById(id).subscribe(
         response =>{
          this.clientData = response;
        },
        error =>{
          console.log(<any>error);
        }
      );
    }
  }

  onSubmit(form){
    const id = this.activatedRoute.snapshot.params.id;
    this._clientService.updateClient(id, this.clientData).subscribe(
      response => {
        alert("User updated.");
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  goHome(){
    this.router.navigate(["/home"])
  }
}
