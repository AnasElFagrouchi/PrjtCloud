import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage : any = "";
  login : string  = "";
  password : string  = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

 submit(): void {
   this.authService.sendAuthentication(this.login, this.password).subscribe(
    (data: any)=> {
      console.log(data)
      this.authService.finalizeAuthentication(data);
      if (data['status'] == 'ok') this.router.navigateByUrl('/cours');
      else this.errorMessage = data['reason'];
    }
   )
 }

}
