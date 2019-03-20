import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-hot-properties',
  templateUrl: './hot-properties.component.html',
  styleUrls: ['./hot-properties.component.css']
})
export class HotPropertiesComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getProperties()
  }
getProperties(){
  this.customerService.getProperties().subscribe(data=>{
    console.log(data)
  })
}
}
