import { Component, ViewChild, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  userEmail: string;
  isLoggedIn: boolean = false;

  constructor(public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(){
    this.firebaseService.currentUser.subscribe(user => {
      if(user){
        this.userEmail = user.email;
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      }
    })
  }

  logout(){
    this.firebaseService.logout();
  }

  username = '';
  emailAddress = '';
  pass = '';
  gender = '';
  checkboxValues = ['Reading', 'Singing', 'Dancing'];
  selectedValues = {};
  isAtLeastOneChecked = false;
  selectedCheckValues = [];
  formSubmitted = false;


  @ViewChild('registrationForm') form: NgForm;

  genders = [
    {id: 'male', value: 'male', display: 'Male'},
    {id: 'female', value: 'female', display: 'Female'},
    {id: 'other', value: 'other', display: 'Other'},
  ];

  onClickSubmit() {
    console.log("form",this.form); 
    this.username = this.form.value.username; 
    this.emailAddress = this.form.value.email; 
    this.pass = this.form.value.password;
    this.gender = this.form.value.gender; 
    
    this.selectedCheckValues = Object.keys(this.selectedValues).filter(key => this.selectedValues[key]);

    // const formValue = this.form.value;
    this.formSubmitted = true; 

    this.form.reset();
 }

  updateButtonState(){
    this.isAtLeastOneChecked = Object.values(this.selectedValues).some(value => value);
    this.form.control.setValue({ ...this.selectedValues });
  }

  

}
