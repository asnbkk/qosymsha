import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.css']
})
export class SettingsSidebarComponent implements OnInit {

  items = [
    {"name": "Публичные данные", "path": "public"},
    {"name": "Личные данные", "path": "personal"},
    {"name": "Пароль", "path": "password"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/student/my-settings/public'])
    //seems to be working but need to fix it
  }

}
