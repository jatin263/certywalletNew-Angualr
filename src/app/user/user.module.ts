import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HomepageuserComponent } from './homepageuser/homepageuser.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    HomepageuserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    CommonComponentModule
  ]
})
export class UserModule { }
