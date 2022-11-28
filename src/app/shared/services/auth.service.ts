import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;

  constructor(private router: Router) {
    this.user = {
      name: '',
      email: '',
    };
    this.token = '';
  }

  initializeUserAndToken() {
    this.user = {
      name: '',
      email: '',
    };
    this.token = '';
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.user) {
      return this.user;
    }

    const userStored = localStorage.getItem('user');
    if (userStored) {
      this.user = JSON.parse(userStored);
      return this.user;
    }

    return null;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenStored = localStorage.getItem('token');
    if (tokenStored) {
      this.token = tokenStored;
      return this.token;
    }

    return null;
  }

  isLogged(): boolean {
    if (this.getUser() && this.getToken()) {
      return true;
    }

    return false;
  }

  logout() {
    this.initializeUserAndToken();
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
