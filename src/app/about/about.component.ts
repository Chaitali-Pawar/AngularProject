import { Component, OnInit } from '@angular/core';
import {Leader} from '../shared/leader';
import {CorporateLeaderService} from '../services/corporate-leader.service'
import { flyInOut ,expand } from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  leaders : Leader[];
  constructor(private leaderService : CorporateLeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders =>this.leaders = leaders);
    //console.log(this.leaders);
  }

}
