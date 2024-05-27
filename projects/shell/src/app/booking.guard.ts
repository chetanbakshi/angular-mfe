import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const bookingGuard: ResolveFn<string> = (route: ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  return "Chetan Bakshi";
};
