import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
        console.log('is logged in ', this.isLoggedIn)
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
