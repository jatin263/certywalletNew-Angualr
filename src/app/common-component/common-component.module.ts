import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentComponent } from './common-component.component';
import { LoadingbarComponent } from './loadingbar/loadingbar.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { TemplateComponent } from './template/template.component';
import { EmailtemplateComponent } from './emailtemplate/emailtemplate.component';
import { TaskComponent } from './task/task.component';
import { HistoryComponent } from './history/history.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CommonComponentComponent,
    LoadingbarComponent,
    NavbartopComponent,
    TemplateComponent,
    EmailtemplateComponent,
    TaskComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule
  ],
  exports: [CommonComponentComponent, LoadingbarComponent, NavbartopComponent, TemplateComponent, EmailtemplateComponent, TaskComponent, HistoryComponent],

})
export class CommonComponentModule { }
