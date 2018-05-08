import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {PrincipalService} from '../principal.service';

@Injectable()
export class AdminAccess implements CanActivate, CanActivateChild {

  constructor(private principalService: PrincipalService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('admin?');
    if (this.principalService.hasAdminRole()) {
      return true;
    } else {
      this.router.navigate(['/403']);
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('admin? child');
    if (this.principalService.hasAdminRole()) {
      return true;
    } else {
      this.router.navigate(['/403']);
      return false;
    }
  }
}
