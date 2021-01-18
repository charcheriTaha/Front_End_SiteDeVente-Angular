import { Component, OnInit } from '@angular/core';
import {LoginService} from "../Services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
mode :number=0;
  constructor(public loginService: LoginService,private  router :Router) {
  }

  ngOnInit(): void {
  }

  onLogin(user) {
    this.loginService.login(user).subscribe(resp=> {
     let jwt = resp.headers.get('Authorization');
      //console.log(jwt);
      this.loginService.saveToken(jwt);
      this.router.navigateByUrl('/Main/accueil');
    },
      error => {
this.mode=1;
    })

  }

onRegister(){
  this.router.navigateByUrl('/Main/registration');
}


}
