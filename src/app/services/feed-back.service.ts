import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Restangular,RestangularModule} from 'ngx-restangular';
import {Feedback} from '../shared/feedback'

@Injectable()
export class FeedBackService {

  constructor(private restangular :Restangular) {

   }

   //method to save data on json server

    submitFeedBack(feedback:Feedback): Observable< Feedback> {
     return  this.restangular.all('feedback').post(feedback);
    }
}
