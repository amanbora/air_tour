
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router ) {

    }

    userId = null;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
        let flag = localStorage.getItem('auth');
        if(flag == "false"){
            alert('You are not allowed to view this page. You are redirected to login Page');
            return  this.router.parseUrl('/');
        }
        return true;
    }
}
