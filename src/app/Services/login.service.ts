import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private host: string = 'http://localhost:8080';
  private jwtToken = null;
  private roless: Array<any> = [];

  constructor(private httpClient: HttpClient) {
  }

  login(user) {
    return this.httpClient.post(this.host + '/login', user, {observe: 'response'});
  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem('token', jwt);
    let jwtHelper = new JwtHelperService();
    this.roless = jwtHelper.decodeToken(this.jwtToken).roles;

  }

  loadToken() {
    return localStorage.getItem('token');
  }

  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }

  isAdmin() {
    for (let r of this.roless) {
      console.log(this.roless)
      if (r.authority == 'ADMIN') return true;
    }
    return false;
  }

  Register(NewUser){
    return this.httpClient.post(this.host + '/register', {"username":NewUser.username,"password":NewUser.password,
      "confirmedPassword":NewUser.confirmedPassword,
       "client":{"nom":NewUser.nom,"prenom":NewUser.prenom,"telephone":NewUser.telephone,
        "email":NewUser.email,"addresse":NewUser.addresse

      }});
  }
}
