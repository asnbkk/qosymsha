import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mode = 'password'
  emailValidation
  passwordValidation
  // firstInput = 'blur'
  constructor() { }

  userModel = {
    email: '',
    name: '',
    password: ''
  }
  
  ngOnInit(): void {
  }
  seePass() {
    if(this.mode == 'password')
      this.mode = 'text'
    else this.mode = 'password'
    
  }
  _emailValidation(email) {
    // this.firstInput = 'input'
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.target.value.match(mailformat)) {
      this.emailValidation = true
    }
    // else if (email.target.value == '') this.emailValidation = false
    else this.emailValidation = false
  }
  _passwordValidation(pass) {
    if(pass != '') {
      this.passwordValidation = true
    }
  }
  onSubmit() {
    if(this.emailValidation && this.passwordValidation) {
      this.userModel.name = this.userModel.email.split('@')[0]
      console.log(this.userModel)
    }   
    if(this.userModel.password == '') this.passwordValidation = false
  }
 
}
