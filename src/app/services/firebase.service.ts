import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  currentUser: Observable<any>;

  constructor(public firebaseAuth : AngularFireAuth, public router: Router) {
    this.currentUser = this.firebaseAuth.authState;
  }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/home']);
    })
  }

  async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/login']);
    })
  }

  logout(){
    this.firebaseAuth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
    localStorage.removeItem('user');
  }
}
