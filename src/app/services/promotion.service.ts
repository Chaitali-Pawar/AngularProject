import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
//import { PROMOTIONS } from '../shared/promotions';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import {Restangular,RestangularModule} from 'ngx-restangular';
@Injectable()
export class PromotionService {

  constructor(private restangular:Restangular) { }
  getPromotions():Observable< Promotion[]> {
   // return Observable.of(PROMOTIONS);
   return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number):Promise< Promotion> {
    return this.restangular.one('promotions',id).get();
   // return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
  }

  getFeaturedPromotion():Observable< Promotion> {
   // PROMOTIONS.filter((promotion) => promotion.featured)[0]
   // return  Observable.of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).delay(2000);
   return this.restangular.all('promotions').getList({featured :true})
                          .map(promotions => promotions[0]);
    };
   
  }


