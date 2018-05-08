import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {PrincipalService} from '../principal.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AnonAccess implements CanActivate {

  constructor(private principalService: PrincipalService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('anon??');
    console.log(this.principalService.isNotUser());
    if (this.principalService.isNotUser()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
