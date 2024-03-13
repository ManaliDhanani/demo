import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  errorMessage: string = '';

  constructor(public firebaseService: FirebaseService){}

  ngOnInit(){
  }

  // async onSignin(email: string, password: string){
  //   await this.firebaseService.signin(email, password);
  // }
  async onSignin(loginForm: any) {
    if (loginForm.valid) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      await this.firebaseService.signin(email, password)
      .catch(error => {
        this.errorMessage = error.message;
      });
    }
  }
}
