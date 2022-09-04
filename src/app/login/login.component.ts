import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
  })
  loginUserCreds = {}
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('Authorization') != null) {
      this._router.navigate(['offers'])
    }
  }
  loginUser() {

    this._auth.loginUser(this.loginUserCreds).subscribe(
      res => {
        console.log(res),
          localStorage.setItem('Authorization', 'Bearer ' + res.authToken)
        this._router.navigate(['offers'])
      }
    )

  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
