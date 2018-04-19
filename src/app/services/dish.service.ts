import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHtppMessageServiceService } from './process-htpp-message-service.service';


import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';


@Injectable()
export class DishService {

    constructor(private http: Http,
    private processHTTPMsgService: ProcessHtppMessageServiceService)  {

    }

      getDishes() :Observable<Dish[]>{
        return this.http.get(baseURL + 'dishes')
        .map(res => { return this.processHTTPMsgService.extractDataFromJson(res); })
        .catch(error => {return this.processHTTPMsgService.handleError(error);});
      } 

      getFeaturedDish():Observable<Dish> {
         // return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
         return this.http.get(baseURL + 'dishes?featured=true')
                          .map(res => { return this.processHTTPMsgService.extractDataFromJson(res)[0];})
                          .catch(error => {return this.processHTTPMsgService.handleError(error);});
      }

      getDish(id:number):Observable<Dish>{
       // return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000); 
       return this.http.get(baseURL + 'dishes/' +id)
                        .map(res => {return this.processHTTPMsgService.extractDataFromJson(res);})
                        .catch(error => {return this.processHTTPMsgService.handleError(error);});
      }

  //  get the ids of the dish with map function which iterates through every element in dish array to return (dish)
  // and we return another array containing only ids.

  getDishIds() :Observable <number[]>{
    return this.getDishes().map(dishes => {return dishes.map(dish => dish.id)} )
    .catch(error => {return this.processHTTPMsgService.handleError(error);});
    //return Observable.of(DISHES.map(dish => dish.id)).delay(2000);
    }
}
