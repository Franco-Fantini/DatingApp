import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 model: any = {};

  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }

  login() {
  this.authServices.login(this.model).subscribe(next => {
    alert('Inicio correcto de sesion');
  }, error => {
    console.log(error);
  });
}
loggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

logout() {
  const token = localStorage.removeItem('token');
  console.log('Se ha cerrado sesión');
}
}
