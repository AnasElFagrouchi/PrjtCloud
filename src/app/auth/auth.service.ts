import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService, PhpData } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authentificated: boolean = false;

  constructor(private service: MessageService) { }

  sendAuthentication(login: string, password: string): Observable<PhpData> {
    return this.service.sendMessage("checklogin", { login: login, password: password });
  }

  finalizeAuthentication(message: PhpData): void {
    if (message.status === 'error')
      this.authentificated = false;
    else
      this.authentificated = true;
    console.log("message :"); console.log(message);
  }

}
