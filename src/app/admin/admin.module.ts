import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { CommonComponentComponent } from '../common-component/common-component.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminComponent,
    HomepageadminComponent
  ],
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule
  ]
})
export class AdminModule { }
