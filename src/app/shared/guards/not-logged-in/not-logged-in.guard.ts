import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotLoggedInGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const isLogged = this.authService.isLogged();
    if (isLogged) {
      console.log('isLogged', isLogged);
      this.router.navigate(['home']);
      return false;
    }
    console.log('isLogged', isLogged);
    return true;
  } 
}