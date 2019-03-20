import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "../../node_modules/rxjs";
import { Injectable } from "../../node_modules/@angular/core";
import { CustomerService } from './customer.service';

@Injectable()

export class AuthGaurd implements CanActivate {

    constructor(private customerServices: CustomerService,
                    private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean>{

            let isLoggedIn: boolean;

       isLoggedIn =this.customerServices.isAuth();

       if(isLoggedIn) {
           return true;

       } else {
        this.router.navigate(['/login']);
        return false;
       }
    }
}