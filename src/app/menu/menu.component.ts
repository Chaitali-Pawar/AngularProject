import { Component, OnInit ,Inject } from '@angular/core';
import { Dish } from '../shared/dish';



import {DishService} from '../services/dish.service';
import { baseURL } from '../shared/baseUrl';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  dishes :  Dish[];
  errMess: string;
  
  //selectedDish: Dish;
    constructor(private dishService :DishService ,
                @Inject('BaseURL') private BaseUrl) { 
     
    }
    
  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes,
                                           errmess => this.errMess = <any>errmess);
    }

  /*onSelect(dish: Dish) {
    
    this.selectedDish = dish;
  }*/

}
