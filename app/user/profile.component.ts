import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
// import { ToastrService } from '../common/toastr.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles:[`
    em {float: right; color: red; padding-left: 10px;}
    .error input {background-color : #e3c3c5;}
    .error ::-webkit-input-placeholder {color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :-moz-input-placeholder {color: #999; }
    .error :ms-input-placeholder {color: #999; }
  `]
})
export class ProfileComponent implements OnInit{

  profileForm : FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(
    private auth: AuthService
    ,private router: Router
    // ,private toastr: ToastrService
    , @Inject(TOASTR_TOKEN) private toastr: Toastr 
  ) { }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName
      ,lastName: this.lastName
    })
   }
   saveProfile(formValues){
      if (this.profileForm.valid){
        this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
        this.toastr.success('Profile Updated!');
        // this.router.navigate(['events'])
      }
   }
    cancel(){
      this.router.navigate(['events'])
    }
    validateFirstName(){
      return this.firstName.valid || this.firstName.untouched
    }
    validateLastName(){
      return this.lastName.valid || this.lastName.untouched
    }


}

