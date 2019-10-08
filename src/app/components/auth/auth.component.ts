import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        console.log("Connexion réussie");
        this.authStatus = this.authService.isAuth;
      }
    );
  }

  onSignOut(){
    console.log("Deconnexion réussie");
    this.authService.signOut();
    this.authStatus=this.authService.isAuth;
  }

}
