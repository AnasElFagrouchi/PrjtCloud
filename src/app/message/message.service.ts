import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface PhpData {
  status : string;
  data : any;
  reason: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(url: string, data: any): any {
    let avt_url = environment.url + url + '.php';
    let formdata = new FormData();
    if (data != null){
      for (const pair of Object.keys(data)) {
        // console.log(pair + ', ' + data[pair]);
        formdata.append(pair, data[pair]);
      }
    }
    return this.http.post(avt_url, formdata, {withCredentials: true})
  }

}
