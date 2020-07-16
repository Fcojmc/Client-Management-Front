import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  
  public newUser: User;
  public errorMessage: String;

  constructor(
    private _registrationService: RegistrationService,
    private router: Router 
  ) { 
   this.newUser = new User();
   this.errorMessage = '';
  }

  ngOnInit() {
    
  }

  onSubmit(form){
    
    this._registrationService.addUser(this.newUser).subscribe(
      response =>{
        alert("User created!");
        this.router.navigate(["login"]);
      },
      error =>{
        this.errorMessage = 'You need to fill the fields';
      }
    );
  }
}
