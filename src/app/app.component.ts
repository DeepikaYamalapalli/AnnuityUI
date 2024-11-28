import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AnnuityUI';
  isAuthenticated = false;
  constructor(public auth: AuthService,public route:Router){

  }
  ngOnInit(): void {

    if(!window.location.href.includes('code') && !window.location.href.includes('code')){
      this.auth.loginWithRedirect();
    }   
  }
  Login(){
    this.auth.loginWithRedirect();
  }
  get isAuthenticated$() {
    return this.auth.isAuthenticated$;
  }

}
