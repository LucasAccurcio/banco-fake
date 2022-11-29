import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';


@NgModule({
  declarations: [
    LoggedComponent,
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    SharedModule,
  ]
})
export class LoggedModule { }
