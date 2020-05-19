import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-button',
  templateUrl: './personal-button.component.html',
  styleUrls: ['./personal-button.component.css']
})
export class PersonalButtonComponent implements OnInit {
  name = "baracuda"
  status = "dead inside"
  constructor() { }

  ngOnInit(): void {
  }

}
