import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*
  registrationForm = new FormGroup({
    userName: new FormControl('Div'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      country:new FormControl('')      
    })
  });
  */

 registrationForm : FormGroup;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email : [],
      subscribe : [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city:[''],
        state:[],
        country:[]      
      }),
      alternateEmail : this.fb.array([])
    }, { validators : passwordValidator});

    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
      if(checkedValue) {
        this.registrationForm.get('email').setValidators(Validators.required);
      } else {
        this.registrationForm.get('email').clearValidators();
      }
      this.registrationForm.get('email').updateValueAndValidity();
    });
  }

  get alternateEmail() {
    return this.registrationForm.get('alternateEmail') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmail.push(this.fb.control(''));
  }

  get userName() {
    return this.registrationForm.get('userName');
  }
  constructor(private fb:FormBuilder) {}

  /*registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator]],
    email : [],
    subscribe : [false],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city:[''],
      state:[],
      country:[]      
    })
}, { validators : passwordValidator});*/

}

