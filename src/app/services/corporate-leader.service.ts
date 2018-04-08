import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';
@Injectable()
export class CorporateLeaderService {

  constructor() { }
  getLeaders() :Leader[]{
    return LEADERS;
  }

  getFeaturedCorporateLeader() :Leader{
    return LEADERS.filter((lead) => lead.featured)[0];
  }

}
