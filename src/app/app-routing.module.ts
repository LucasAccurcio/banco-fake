import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [/* {
  path: '',
  loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule),
  canActivate: [LogggedGuard],
},
{
  path: 'login',
  loadChildren: () => import('./not-logged-in/not-logged-in.module').then(m => m.NotLoggedInModule),
  canActivate: [NotLogggedGuard],
}, */
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
