import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
@Injectable()
export class CorporateLeaderService {

  constructor() { }
  getLeaders() :Promise<Leader[]>{
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
   
  }

  getFeaturedCorporateLeader() :Promise<Leader>{
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((lead) => lead.featured)[0]), 2000);
    });
  }

}
