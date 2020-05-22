import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mode = 'password'
  constructor() { }

  ngOnInit(): void {
  }
  seePass() {
    if(this.mode == 'password')
      this.mode = 'text'
    else this.mode = 'password'
  }
}
