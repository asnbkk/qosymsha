import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-public',
  templateUrl: './settings-public.component.html',
  styleUrls: ['./settings-public.component.css']
})
export class SettingsPublicComponent implements OnInit {
  settingsModel = {
    username: '',
    status: '',
    email: ''
  }
  constructor() { }

  ngOnInit(): void {
    this.settingsModel.username = localStorage.getItem('username')
    this.settingsModel.email = localStorage.getItem('email')
  }

}
