import { Injectable } from '@angular/core';
import {Http ,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProcessHtppMessageServiceService {

  constructor() { }

  public extractDataFromJson(res:Response){
    let body = res.json();
    console.log("Body in response is "+body);
    return body || {};
  }

}
