import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  reactiveForm: FormGroup;
  checkboxSelected: boolean = false;
  formStatus: string = '';
  formSubmitted = false;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required, CustomValidators.checkUserName),
      email: new FormControl(null, [Validators.required, Validators.email, CustomValidators.noSpaceAllowed]),
      password: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      gender: new FormControl('male', Validators.required),
      hobbies: new FormArray([]),
      skills: new FormArray([new FormControl(null, Validators.required),]),
    })

    // this.reactiveForm.valueChanges.subscribe((data) => {
    //   console.log(data); 
    // })
    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status); 
      this.formStatus = status;
    })
  }

  onHobbyChange(e) {
    var hobbies: FormArray = this.reactiveForm.get('hobbies') as FormArray;

    if (e.target.checked) {
      hobbies.push(new FormControl(e.target.value));
      // console.log(hobbies.value);
    } else {
      var index = hobbies.controls.findIndex(ind => ind.value === e.target.value);
      hobbies.removeAt(index);
      // console.log(hobbies.value);
    }
    this.checkboxSelected = hobbies.length > 0;
  }

  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  deleteSkill(index){
    var controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm.value.email);
    this.formSubmitted = true; 
    
  }

  // GenerateUserDetails(){
  //   // let username = '';
  //   const username = this.reactiveForm.get('username').value;
  //   const email = this.reactiveForm.get('email').value;
  //   const password = this.reactiveForm.get('password').value;
  //   const gender = this.reactiveForm.get('gender').value;
  //   const hobbies = this.reactiveForm.get('hobbies').value;
  //   const skills = this.reactiveForm.get('skills').value;
    
  //   this.reactiveForm.setValue({

  //       username: username,
  //       email: email,
  //       password: password,
  //       gender: gender,
  //       hobbies: [...hobbies],
  //       skills: [...skills],
      
  //   })
  // }
}
