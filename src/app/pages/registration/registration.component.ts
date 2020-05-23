import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mode = 'password'
  emailValidation
  emailDuplicate = false
  passwordValidation
  // firstInput = 'blur'
  constructor(
    private userService: UserService,
    private router: Router,
    private location: Location
  ) { }

  userModel = {
    email: '',
    name: '',
    password: ''
  }

  ngOnInit(): void {
  }
  seePass() {
    if (this.mode == 'password')
      this.mode = 'text'
    else this.mode = 'password'

  }
  _emailType() {
    this.emailValidation = true
    this.emailDuplicate = false
    //seems to be ok
  }
  _emailValidation(email) {
    // this.firstInput = 'input'
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.target.value.match(mailformat)) {
      this.emailValidation = true
    }
    // else if (email.target.value == '') this.emailValidation = false
    else this.emailValidation = false
  }
  _passwordValidation(pass) {
    if (pass != '') {
      this.passwordValidation = true
    }
  }
  onSubmit() {
    if (this.emailValidation && this.passwordValidation) {
      this.userModel.name = this.userModel.email.split('@')[0]

      this.userService.onRegsiter(this.userModel).subscribe(res => {
        if (res.message) {
          this.emailDuplicate = true
          this.emailValidation = false
        }
        else {
          this.router.navigate(['/student/my-messages'], { replaceUrl: true })
          // this.location.replaceState('/student'); 
          //removes current paht from history
          localStorage.setItem('qosymsha_token', res.token)
          localStorage.setItem('username', this.userModel.name)
          //TODO: hello argun
        }
      })
    }
    if (this.userModel.password == '') this.passwordValidation = false
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.onSubmit()
    }
  }

}
