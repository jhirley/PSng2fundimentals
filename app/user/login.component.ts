import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: 'app/user/login.component.html'
    ,styles:[`
        em {float:right; color: red; padding-left:10px;}
    `]
})
export class LoginComponent {
    constructor(
        private authService: AuthService
        ,private router: Router
        ) { }

    login(formvalues) {
        this.authService.loginUser(formvalues.userName,formvalues.password)
        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}