import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut, visibility, expand ,visibilityFormSubmission } from '../animations/app.animation';
import {FeedBackService} from '../services/feed-back.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      visibility(),
      expand(),
      visibilityFormSubmission()
      
    ]
})
export class ContactComponent implements OnInit {

  feedback : Feedback;
  feedbackResult : Feedback;
  feedBackCopy =null;
  feedbackForm : FormGroup;
  contactType = ContactType;
  errMsg:String;
  feedBackSubmit :boolean;
  visibility ='shown' ;
  visibilityFormSubmission = 'hidden';
  
  


  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  constructor(private fb :FormBuilder,
              private feedBackService:FeedBackService) { 
    this.createForm();
  }

  ngOnInit() {
    this.feedBackSubmit = true;
  }


  createForm (){
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
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
  OnFormView(){
    setTimeout(() => {
      this.OnReset();
    }, 5000);
   
  }

  OnReset(){
    this.visibility = 'shown';
    this.visibilityFormSubmission ='hidden';
    this.feedbackResult = null;
    this.feedbackForm.reset();
    for (const field in this.formErrors) {
      //clear previous error message (if any)
     this.formErrors[field] = '';
    } 
  }
  OnSubmit(){
    this.feedBackSubmit = false;
    this.feedback = this.feedbackForm.value;
    this.visibility = 'hidden';
    this.feedBackService.submitFeedBack(this.feedback).subscribe(feedback =>{ this.feedbackResult = feedback ; 
                                        this.feedBackSubmit = true;
                                        this.visibilityFormSubmission ='shown';
                                        this.OnFormView()},
                                        errMsg => this.errMsg = this.errMsg);
    
  }


}
