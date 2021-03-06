import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  

 
  constructor(
    private _tokenService: TokenService,
    private router: Router
    ) { 
      
    }

  ngOnInit() {
    
  }

  logOut(){
    this._tokenService.logOut();
    window.location.reload();
  }
  
}
