import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  custSignUpdeails = {
    customerType:'',
    customerName:'',
    password:'',
    email:'',
    mobileNumber:'',
  }
  reenterdPassword;
  passwordNotMatched;
  passwrdmatch = false;
  RegisterdSuccessFully;

  loginDetails={
    email:'',
    password:""
  }
  
  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit() {
  }

  customerSignUp(event){
    if(this.custSignUpdeails.password===this.reenterdPassword){
      this.passwrdmatch = false;

      console.log("signup",this.custSignUpdeails)
      this.customerService.customerSignUp(this.custSignUpdeails).subscribe(data=>{
        if(data['status']===200){
        
          this.RegisterdSuccessFully=data['message']
          this.custSignUpdeails = {
            customerType:'',
            customerName:'',
            password:'',
            email:'',
            mobileNumber:'',
          }
          this.reenterdPassword="";
          setTimeout(() => {
            this.RegisterdSuccessFully='';
          }, 5000);
        }
       console.log(data)
     })
    }else{
      console.log("fail",this.custSignUpdeails)
      this.passwrdmatch = true;
      this.passwordNotMatched = 'Please Enter the same password In Both Password Fields'
    }
  }
  customerLogin(){
  this.customerService.customerLogin(this.loginDetails).subscribe(data=>{
    console.log(data)
    if(data["status"]===200){
      let token=data['token']
      localStorage.setItem('custToken',token)
      this.router.navigate(['/addproperty'])
    }
  })
}

  
}
