import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';

  constructor(public firebaseService: FirebaseService){}

  ngOnInit(){
  }

  async onSignup(signupForm: any) {
    if (signupForm.valid) {
      const email = signupForm.value.email;
      const password = signupForm.value.password;
      await this.firebaseService.signup(email, password)
      .catch(error => {
        this.errorMessage = error.message; // Display Firebase error message
      });
    }
  }

}
