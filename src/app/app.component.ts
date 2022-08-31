import { Component, Injectable} from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    //username: new FormControl('',Validators.compose([Validators.required,Validators.email])),
    //password: new FormControl('',Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$')])),
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
