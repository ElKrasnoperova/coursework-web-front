import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {PrincipalService} from '../principal.service';

@Injectable()
export class UserAccess implements CanActivate, CanActivateChild {

  constructor(public principalService: PrincipalService,
              public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('user?');
    if (this.principalService.hasUserRole()) {
      return true;
    } else {
      this.router.navigate(['/403']);
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('user? child');
    if (this.principalService.hasUserRole()) {
      return true;
    } else {
      this.router.navigate(['/403']);
      return false;
    }
  }
}
