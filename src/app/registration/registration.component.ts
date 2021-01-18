import { Component, OnInit } from '@angular/core';
import {LoginService} from "../Services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mode :number=0;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  onRegistration(NewUser){
    this.loginService.Register(NewUser).subscribe(resp=>{
      //  let jwt = resp.headers.get('Authorization');
        //console.log(jwt);
       // this.loginService.saveToken(jwt);
        this.router.navigateByUrl('/Main/accueil');
      },
      error => {
        this.mode=1;

      }
    )

  }
}
