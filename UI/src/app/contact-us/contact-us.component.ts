import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactUs;
mail;
address;
phone
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      this.contactUs = data.websettingsResolver[0]
      this.mail = this.contactUs.email;
      this.phone = this.contactUs.phoneNumber;
      this.address = this.contactUs.address
      console.log(this.contactUs)
    })
  }


  

  

}
