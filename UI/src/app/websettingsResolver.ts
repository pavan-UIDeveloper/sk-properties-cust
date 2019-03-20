import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WebsettingsResolver implements Resolve<any>{

    constructor(private customerService:CustomerService,private http:HttpClient){}
    url = 'http://localhost:3000/'
    resolve(router:ActivatedRouteSnapshot, state:RouterStateSnapshot):any{
console.log('pavan')
let response = this.http.get(this.url+'websettings/get-websettings')
    return response;
    }
}