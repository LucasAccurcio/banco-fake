import { Injectable } from '@angular/core';
import { delay, mergeMap, Observable, of, tap, throwError, timer } from 'rxjs';

import { AuthService } from '../shared/services/auth.service';
import { LoginInterface } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) { }

  login(email: string, password: string): Observable<LoginInterface> {
    if (email === 'lucas@email.com' && password === 'lucas') {
      return of({
        user: {
          name: 'Lucas',
          email: 'lucas@email.com',
        },
        token: 'aD12h3123523543fgdfg',
      })
        .pipe(
          delay(2000),
          tap(response => {
            this.authService.setUser(response.user);
            this.authService.setToken(response.token);
          })
        );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError(() => new Error('Usuário ou senha incorretos.'))
      ));
  }
}
