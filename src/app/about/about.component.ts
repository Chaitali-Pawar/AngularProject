import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {CorporateLeaderService} from '../services/corporate-leader.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders : Leader[];
  constructor(private leaderService : CorporateLeaderService) { }

  ngOnInit() {

    this.leaders = this.leaderService.getLeaders();
    console.log(this.leaders);
  }

}
