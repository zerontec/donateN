import { Injectable } from '@angular/core';
import {tap, map, take} from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
constructor( private router: Router, private authServices: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServices.afAuth.authState.pipe(
      take(1),
      map(authState => !! authState),
      tap(logado =>  {
        if (!logado) {
          this.router.navigate(['/login']);
        }

      }));
  }
}
