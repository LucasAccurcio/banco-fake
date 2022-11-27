import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

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
      return false;
    }

    this.router.navigate(['home']);
    return true;
  }
}
