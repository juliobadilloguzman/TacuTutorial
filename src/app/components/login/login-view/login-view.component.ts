import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  login(): void{

    let user: User = this.loginForm.value;

    this._loginService.login(user).subscribe(
      res => {
        if(res){
          alert('SUCCESFULL');

          //Por hacer
          //Redigirir al usuario al dashboard
        }
      },
      error => {
        alert('No se pudo loguear');
      }
    )

  }

}
