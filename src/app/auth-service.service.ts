import { Injectable } from '@angular/core';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private messageService: MessageService) { }

  sendAuthentication(login: string, password: string) {
    
  }
}
