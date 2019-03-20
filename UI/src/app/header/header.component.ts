import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute,private customerService : CustomerService,private http:HttpClient) { }

  email='';
  phone=''
  url = 'http://localhost:3000/'

  isAuth:boolean
  ngOnInit() {
    this.getwebsettings().subscribe(data=>{
      console.log(data)
      this.email = data[0].email
      this.phone = data[0].phoneNumber
      console.log(this.email)

    })
    // this.route.data.subscribe(data=>{
    // //  console.log(data)
    // })
  }
  getwebsettings(){
    let response = this.http.get(this.url+'websettings/get-websettings')
    console.log(response)
    return response;
  }

}
