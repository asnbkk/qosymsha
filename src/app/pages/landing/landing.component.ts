import { Component, OnInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewChecked {
  goBackCounter: boolean = true
  constructor(
    private router: Router,
  ) { }

  ngAfterViewChecked() {
    let token = localStorage.getItem('qosymsha_token')
    if (token && this.goBackCounter) {
      this.router.navigate(['/student/my-messages'], { replaceUrl: true })
      console.log('times')
    }
  }

  ngOnInit(): void {
  }

}
