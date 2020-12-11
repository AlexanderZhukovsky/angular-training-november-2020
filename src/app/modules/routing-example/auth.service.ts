import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    public isAuth(): Observable<boolean> {
        console.log('Is Auth check')
        return of(true).delay(2500);
    }

    public isChildAuth(): Observable<boolean> {
        console.log('Is Child Auth check')
        return of(true).delay(2500);
    }
}
