import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-button',
  templateUrl: './personal-button.component.html',
  styleUrls: ['./personal-button.component.css']
})
export class PersonalButtonComponent implements OnInit {
  name
  active: boolean = false
  status = "dead inside"
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('username')
  }

  onClick() {
    this.router.navigate(['/student/my-settings'])
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
