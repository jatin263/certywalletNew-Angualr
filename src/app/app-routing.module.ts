import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomepageuserComponent } from './user/homepageuser/homepageuser.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageadminComponent } from './admin/homepageadmin/homepageadmin.component';
import { EmailtemplateComponent } from './common-component/emailtemplate/emailtemplate.component';
import { TemplateComponent } from './common-component/template/template.component';
import { HistoryComponent } from './common-component/history/history.component';
import { TaskComponent } from './common-component/task/task.component';

const routes: Routes = [
  {path: 'User',component:UserComponent,children:[
    {path:'Home',component:HomepageuserComponent},
    {path:'EmailTemplate',component:EmailtemplateComponent},
    {path:'Template',component:TemplateComponent},
    {path:'History',component:HistoryComponent},
    {path:'Task',component:TaskComponent}
  ]},
  {path:'Admin',component:AdminComponent,children:[
    {path:'Home',component:HomepageadminComponent},
    {path:'EmailTemplate',component:EmailtemplateComponent},
    {path:'Template',component:TemplateComponent},
    {path:'History',component:HistoryComponent},
    {path:'Task',component:TaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
