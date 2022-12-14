import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedComponent } from './logged.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: LoggedComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'extrato',
    loadChildren: () => import('./extrato/extrato.module').then(m => m.ExtratoModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
