import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{
  title = 'qosymsha';
  url
  constructor() {
  }

  ngAfterContentChecked() {  
    let arr = (window.location.href.split('/'))
    this.url = arr[arr.length - 1]  
  }
}
