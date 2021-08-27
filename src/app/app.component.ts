import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'login', url: '/login', icon: 'paper-plane' },
    { title: 'Register', url: '/register', icon: 'heart' },
    { title: 'Dashboard', url: '/dashboard', icon: 'archive' },
    { title: 'circle', url: '/circle', icon: 'trash' },
    { title: 'message', url: '/message', icon: 'trash' },
    { title: 'chat', url: '/chat', icon: 'trash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
