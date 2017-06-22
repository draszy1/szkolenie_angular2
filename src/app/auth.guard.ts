import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const isLoggedIn = prompt('Are you logged in?') === 'yes';
    if (!isLoggedIn) {
      this.router.navigateByUrl('/');
      // this.router.events.subscribe
    }
    return isLoggedIn;
  }
}
