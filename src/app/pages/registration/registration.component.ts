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
  // firstInput = 'blur'
  constructor() { }

  ngOnInit(): void {
  }
  seePass() {
    if(this.mode == 'password')
      this.mode = 'text'
    else this.mode = 'password'
    
  }
  validation(email) {
    // this.firstInput = 'input'
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.target.value.match(mailformat)) {
      this.emailValidation = true
    }
    // else if (email.target.value == '') this.emailValidation = false
    else this.emailValidation = false
  }
}
