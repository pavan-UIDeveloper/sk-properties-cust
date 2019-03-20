import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PropertySerchComponent } from './home/property-serch/property-serch.component';
import { BannerComponent } from './home/banner/banner.component';
import { HotPropertiesComponent } from './hot-properties/hot-properties.component';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WebsettingsResolver } from './websettingsResolver';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AuthGaurd } from './auth-gaurd';
import { LogOutComponent } from './log-out/log-out.component';


///import {HttpClientModule} from '@angular/core/http'

const route:Routes = [
  {path:'',resolve:{websettingsResolver:WebsettingsResolver},component:HomeComponent},
  {path:'login',resolve:{websettingsResolver:WebsettingsResolver},component:LoginComponent},
  {path:'logOut',component:LogOutComponent},
  {path:'aboutus',resolve:{websettingsResolver:WebsettingsResolver},component:AboutUsComponent},
  {path:'contactus',resolve:{websettingsResolver:WebsettingsResolver},component:ContactUsComponent},
  {path:'addproperty',canActivate:[AuthGaurd],component:AddPropertyComponent},
  {path:'properties',resolve:{websettingsResolver:WebsettingsResolver},component:PropertiesComponent,children:[
   
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PropertiesComponent,
    ContactUsComponent,
    LoginComponent,
    HeaderComponent,
    PropertySerchComponent,
    BannerComponent,
    HotPropertiesComponent,
    AddPropertyComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
    
    
  ],
  providers: [WebsettingsResolver,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
