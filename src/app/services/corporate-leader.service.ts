import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import {Restangular,RestangularModule} from 'ngx-restangular'
@Injectable()
export class CorporateLeaderService {

  constructor(private restangular :Restangular) { }
  getLeaders() :Observable<Leader[]>{
    return this.restangular.all('leaders').getList();
    //return Observable.of(LEADERS).delay(2000);
  }

  getFeaturedCorporateLeader() :Observable<Leader>{
    return this.restangular.all('leaders').getList({featured : true}).map(leaders => leaders[0]);
    //return Observable.of(LEADERS.filter((lead) => lead.featured)[0]).delay(2000);
  }

}
