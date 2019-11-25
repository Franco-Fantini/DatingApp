import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService , private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
     this.authService.Register(this.model).subscribe(() => {
      this.alertify.success('Se ha registrado correctamente'); }, error => {
        this.alertify.error(error);
      }
     );
  }

  cancel() {
   this.cancelRegister.emit(false);
   console.log('cancelled');
  }

}
