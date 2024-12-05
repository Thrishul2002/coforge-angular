import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string='';
  passWord:string='';
  errorMessage:string='';

  //static login credentials
  validUsername='admin';
  validPassword='password';

  //DI Router DI using constructor
  constructor(private router:Router){ }

  login(){
    if(this.username==this.validUsername && this.passWord==this.validPassword){
      this.router.navigate(['/']);
    }
    else{
      this.errorMessage='Invalid Credentials,pls try again'
    }
  }
}
