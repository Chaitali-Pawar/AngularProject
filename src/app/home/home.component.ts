import { Component, OnInit ,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {Leader} from '../shared/leader';
import {CorporateLeaderService} from '../services/corporate-leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    dish:Dish;
    promotion:Promotion;
    leader :Leader;
    errMsg :string;
    constructor(private dishService:DishService , 
                private promotionService:PromotionService,
                private leaderService : CorporateLeaderService,
                @Inject('BaseURL') private BaseUrl)  {

                 }

  ngOnInit() {
   this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,
                                                errMsg => this.errMsg = <any>errMsg);
  //  console.log("dish is"+this.dish.id);
    this.promotionService.getFeaturedPromotion().subscribe(promotion =>this.promotion = promotion);
    this.leaderService.getFeaturedCorporateLeader().subscribe(leader => this.leader = leader);
  }

}
