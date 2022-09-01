import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private _loginUrl = "https://selfcare-service.test.melita.com/interview/backend/api/login";
  constructor(private httpClient: HttpClient, private _router: Router) { }

  loginUser(user: Object) {
    return this.httpClient.post<any>(this._loginUrl, user)
  }

  isloggedIn() {
    return !!localStorage.getItem('Authorization')
  }

  canActivate(): boolean {
    if (this.isloggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['/login'])
      return false;
    }
  }


}
