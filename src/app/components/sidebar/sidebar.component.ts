import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  margin
  url
  items = [
    {"name": "Добавить предмет", "icon": "add", "path": "add-course"},
    {"name": "Мои предметы", "icon": "laptop_chromebook", "path": "my-subjects"},
    {"name": "Мои сообщения", "icon": "chat_bubble_outline", "path": "my-messages"},
    {"name": "Мои данные", "icon": "perm_identity", "path": "my-settings"},
  ]
  constructor(private router: Router, location: Location) {
    router.events.subscribe(() => {
      // if (location.dpath() != "") {
        // let arr = location.path().split('/')
        // this.url = arr[arr.length - 1]  
        this.url = location.path()
        this.onSelect()
        //seems working
      // } 
    });
   }

  ngOnInit(): void {
    let currentUrl = this.router.url
    let temp = this.items.find(o => currentUrl.includes(o.path))
    this.margin = this.items.indexOf(temp)
  }

  onSelect() {
    let temp = this.items.find(o => this.url.includes(o.path))
    this.margin = this.items.indexOf(temp)
  }

}
