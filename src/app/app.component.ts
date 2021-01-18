import { Component } from '@angular/core';
import {LoginService} from "./Services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TahaNet';

  constructor(private loginService:LoginService,private router:Router) {
  }

  onLogout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }
}
