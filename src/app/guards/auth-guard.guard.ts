import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private readonly router: Router, private userService: UserService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      this.userService.userSub.subscribe(user => {
        if (user != null && user != undefined) {
          if (!user.isLoggedIn) {
              this.router.navigate(['/login']);
                return false;
            }
            else if(user.isLoggedIn && user.username === 'admin'){
              this.router.navigate(['/admin']);
              return true;
            }
          return true;
        }
      });
      return true;
    }
  
}
