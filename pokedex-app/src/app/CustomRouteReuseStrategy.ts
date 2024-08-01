import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy,} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private routeStore = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return false;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }
}
