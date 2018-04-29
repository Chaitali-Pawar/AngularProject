import { Component, OnInit,Inject } from '@angular/core';
import {Leader} from '../shared/leader';
import {CorporateLeaderService} from '../services/corporate-leader.service'
import { flyInOut ,expand } from '../animations/app.animation';
import { baseURL } from '../shared/baseUrl';

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
  errMsg :string;
  constructor(private leaderService : CorporateLeaderService,
              @Inject('BaseURL') private BaseUrl) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders =>this.leaders = leaders,
                                             errMsg => this.errMsg = <any>errMsg);
    //console.log(this.leaders);
  }

}
