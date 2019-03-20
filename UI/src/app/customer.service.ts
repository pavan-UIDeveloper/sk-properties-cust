import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
url = 'http://localhost:3000/'

  getwebsettings(){
    let response = this.http.get(this.url+'websettings/get-websettings')
    return response;
  }

  customerSignUp(details){
    console.log(details)
    let response = this.http.post(this.url+'person/cust-signup',details)
    return response;
    
      }

  customerLogin(details){
    console.log(details)
    let response = this.http.post(this.url+'person/cust-login',details)
    return response;
  }

  getProperties(){
    return this.http.get(this.url+'properties/properties')
  }

  isAuth(){
    let token = localStorage.getItem('custToken')
    if(token){
      return true
    }else{
      return false
    }
  }
}
