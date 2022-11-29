import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggedGuard } from './shared/guards/logged/logged.guard';
import { NotLoggedInGuard } from './shared/guards/not-logged-in/not-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [NotLoggedInGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [LoggedGuard],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
