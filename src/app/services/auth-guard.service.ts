import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( public router: Router) { }

  canActivate(): boolean {

      if (sessionStorage.getItem('token') == null) {
          this.router.navigate(['/landing']);
          return false;
      }
      return true;
  }}
