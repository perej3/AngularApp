import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.compose([Validators.required,Validators.minLength(4)])),
    password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(8)])),
  })

  loginUser(){
    
    console.warn(this.loginForm.value)
  }

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }

}
