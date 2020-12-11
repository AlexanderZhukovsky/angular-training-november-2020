import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ParentPageComponent } from './components/parent-page/parent-page.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<ParentPageComponent> {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('CanActivate check');
        return this.authService.isAuth();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('CanActivate Child check');
        return this.authService.isAuth();
    }

    canDeactivate(
        component: ParentPageComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): boolean {
        console.log('canDeactivate check');
        component.saveData();
        return true;
    }

    resolve(): any {
        return { firstName: 'Vasya', lastName: 'Pupkin' };
    }
}
