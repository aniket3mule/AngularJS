import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/model/registration';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  })

  register:Registration=new Registration();
  ngOnInit() {
  }

  onRegister(){
    console.log('firstname',this.registerForm.controls.firstName.value);
    
  }

}
