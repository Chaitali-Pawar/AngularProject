import { Component, OnInit ,Inject} from '@angular/core';
import {Dish} from '../shared/dish';

import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Comment} from '../shared/Comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  
  dish: Dish; 
  dishIds : number[];
  prev :number;
  next :number;
  commentForm : FormGroup;
  comment :Comment;
  errMess: string;

  formErrors = {
    'comment': '',
    'author': ''
  };

  validationMessages = {
    'comment': {
      'required':      'Comment is required.'
    },
    'author': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.'
    }
   
  };

  
  constructor(private dishService :DishService,
              private location :Location,
              private route : ActivatedRoute,
              private fb : FormBuilder ,
              @Inject('BaseURL') private BaseUrl) {
    
    this.createForm();

   }

  ngOnInit() {
    // use observables to retrieve the dish ids.
    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    // switchMap allows us to use Observable params which is set using the dish service method and then we subscribe
    // to this observable also set the prev and next , hence whenever the param changes the prev and nexr are set.
     this.route.params.switchMap((params : Params) => this.dishService.getDish(+params['id']) )
     .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)},
                errmess => this.errMess = <any>errmess); 

    
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

  createForm() :void {
    this.commentForm = this.fb.group({
      rating: '',
      comment:['',Validators.required],
      author: ['',[Validators.required,Validators.minLength(2)]]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toString();
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.commentForm.reset({
      rating: '5',
      comment:'',
      author: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  

  
 

}
