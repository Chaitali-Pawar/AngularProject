import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
@Injectable()
export class PromotionService {

  constructor() { }
  getPromotions():Observable< Promotion[]> {
    return Observable.of(PROMOTIONS);
  }

  getPromotion(id: number):Promise< Promotion> {
    return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion():Observable< Promotion> {
   // PROMOTIONS.filter((promotion) => promotion.featured)[0]
    return  Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
    };
   
  }


