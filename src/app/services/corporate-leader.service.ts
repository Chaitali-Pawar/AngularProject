import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
@Injectable()
export class CorporateLeaderService {

  constructor() { }
  getLeaders() :Observable<Leader[]>{
    return Observable.of(LEADERS).delay(2000);
  }

  getFeaturedCorporateLeader() :Observable<Leader>{
    return Observable.of(LEADERS.filter((lead) => lead.featured)[0]).delay(2000);
  }

}
