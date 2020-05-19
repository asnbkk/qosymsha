import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  margin
  items = [
    {"name": "Добавить предмет", "icon": "add", "path": "add-course"},
    {"name": "Мои предметы", "icon": "laptop_chromebook", "path": "my-subjects"},
    {"name": "Мои сообщения", "icon": "chat_bubble_outline", "path": "my-messages"}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    let currentUrl = this.router.url
    console.log(currentUrl)
    let temp = this.items.find(o => currentUrl.includes(o.path))
    this.margin = this.items.indexOf(temp)
  }

  onSelect(name) {
    let temp = this.items.find(o => o.name == name)
    this.margin = this.items.indexOf(temp)
  }

}
