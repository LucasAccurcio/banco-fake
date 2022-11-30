import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtratoRoutingModule } from './extrato-routing.module';
import { ExtratoComponent } from './extrato.component';


@NgModule({
  declarations: [
    ExtratoComponent
  ],
  imports: [
    CommonModule,
    ExtratoRoutingModule
  ]
})
export class ExtratoModule { }
