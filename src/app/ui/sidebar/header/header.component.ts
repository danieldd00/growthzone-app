import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [ButtonModule, MenuModule],
})
export class HeaderComponent implements OnInit {
  // Existing user menu items
  items: MenuItem[] = [];

  // New add menu items
  addItems: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
      {
        label: 'Info Hub',
        icon: 'pi pi-external-link',
      },
      {
        label: 'Product Updates',
        icon: 'pi pi-external-link',
      },
      {
        label: 'Training',
        icon: 'pi pi-external-link',
      },
      {
        label: 'Feature Requests',
        icon: 'pi pi-external-link',
      },
    ];

    this.addItems = [
      {
        label: 'Add Individual',
        icon: 'pi pi-user',
      },
      {
        label: 'Add Business',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'Add Event',
        icon: 'pi pi-calendar-plus',
      },
      {
        label: 'Add Reminder',
        icon: 'pi pi-check',
      },
    ];
  }
}
