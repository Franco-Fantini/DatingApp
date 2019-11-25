import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 model: any = {};

  constructor(public authService: AuthService , private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
  this.authService.login(this.model).subscribe(next => {
    this.alertify.success('Inicio correcto de sesion');
  }, error => {
    this.alertify.error(error);
  });
}
loggedIn() {
return this.authService.loggedIn();
}

logout() {
  const token = localStorage.removeItem('token');
  this.alertify.message('Se ha cerrado sesion');
}
}
