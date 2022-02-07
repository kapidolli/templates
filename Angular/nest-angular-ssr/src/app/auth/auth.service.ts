import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, of, switchMap, tap } from 'rxjs';
import { User } from './user.model';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null!);
  private _jwtToken!: string;
  private tokenExpirationTimer: any;

  constructor(
    private router: Router,
    private auth: Auth,
    private http: HttpClient
  ) {
    this.auth.onAuthStateChanged((user) => {
      user?.getIdToken().then((jwt) => {
        this._jwtToken = jwt;
      });
    });
    this.user.next(null!);
  }

  emailLogin(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((credentials) => {
        return this.http.get<User>('/api/auth/' + credentials.user.uid);
      })
    );
  }

  googleSignin() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider)).pipe(
      switchMap((credentials) => {
        return this.http.get<User>('/api/auth/' + credentials.user.uid);
      })
    );
  }

  signOut() {
    of(signOut(this.auth)).subscribe({
      next: () => {
        this.logout();
      },
      error: () => {
        this.logout();
      },
    });
  }

  logout() {
    this.user.next(null!);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  get token() {
    return this._jwtToken;
  }
}
