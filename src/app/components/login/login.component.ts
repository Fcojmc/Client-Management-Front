import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../model/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  isLogged: boolean = false;
  userLogin: UserLogin;
  userName: string;
  passwordUser: string;
  roles: string[];
  errorMsg: string;

  constructor(
    private _tokenService: TokenService,
    private _authService: AuthService,
    private router: Router
    ) { 
    this.userName = '';
    this.passwordUser = '';
    this.userLogin = new UserLogin(this.userName, this.passwordUser);
  }

  ngOnInit() {
    if(this._tokenService.getToken()){
      this.isLogged = true;
      this.roles = this._tokenService.getAuthorities();
    }

  }

  userLog(){
    
    this._authService.login(this.userLogin).subscribe(
      response => {
        this.isLogged = true;

        this._tokenService.setToken(response.token);
        this._tokenService.setUserName(response.userName)
        this._tokenService.setAuthorities(response.authorities);
        this.roles = response.authorities;
        window.location.reload();
      },
      err => {
        this.isLogged = false;
        this.errorMsg = 'Bad credentials';
        alert(this.errorMsg);      
      }
    );
  }
}
