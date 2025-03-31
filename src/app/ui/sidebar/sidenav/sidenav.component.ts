import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidenav',
  imports: [MenuModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent implements OnInit {
  sideNavItems: MenuItem[] = [];

  ngOnInit(): void {
    this.sideNavItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
      },
      {
        label: 'Individuals',
        icon: 'pi pi-user',
      },
      {
        label: 'Memberships',
        icon: 'pi pi-building',
      },
      {
        label: 'Billing',
        icon: 'pi pi-receipt',
      },
      {
        label: 'Events',
        icon: 'pi pi-calendar',
      },
      {
        label: 'Reports',
        icon: 'pi pi-chart-bar',
      },
      {
        label: 'Communication',
        icon: 'pi pi-inbox',
      },
      {
        label: 'Committees',
        icon: 'pi pi-users',
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
      },
      {
        label: 'Projects/Tasks',
        icon: 'pi pi-list-check',
      },
      {
        label: 'Setup',
        icon: 'pi pi-cog',
      },
    ];
  }
}
