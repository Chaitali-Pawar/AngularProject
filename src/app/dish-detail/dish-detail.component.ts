import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  
  dish: Dish; 
  dishIds : number[];
  prev :number;
  next :number;
  
  constructor(private dishService :DishService,
              private location :Location,
              private route : ActivatedRoute) {

   }

  ngOnInit() {
    // use observables to retrieve the dish ids.
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    // switchMap allows us to use Observable params which is set using the dish service method and then we subscribe
    // to this observable also set the prev and next , hence whenever the param changes the prev and nexr are set.
     this.route.params.switchMap((params : Params) => this.dishService.getDish(+params['id']) )
     .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});

    
  }

  // set prev and next for finding the prev and next dish , incase 0 dish is selected return the last dish hence modulo
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
