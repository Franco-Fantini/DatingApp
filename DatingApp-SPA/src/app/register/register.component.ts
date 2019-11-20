import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
     this.authService.Register(this.model).subscribe(() => {
      alert('Registro exitoso'); }, error => {
        alert(error);
      }
     );
  }

  cancel() {
   this.cancelRegister.emit(false);
   console.log('cancelled');
  }

}
