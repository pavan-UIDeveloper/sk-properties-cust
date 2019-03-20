import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
aboutUs;
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
this.route.data.subscribe(data=>{
  this.aboutUs= data.websettingsResolver[0].aboutUs
})
  }

}
