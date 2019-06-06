import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth
  ) {
  }

  public login(user: string, password: string): Observable<firebase.auth.UserCredential> {
    return new Observable(response => {
      this.fireAuth.auth.signInWithEmailAndPassword(user, password)
        .then(token => response.next(token))
        .catch(error => response.error(error))
    });
  }

  public logOut() {
    return new Observable(response => {
      this.fireAuth.auth.signOut()
        .then(() => response.next())
        .catch(error => response.error());
    });
  }
}
