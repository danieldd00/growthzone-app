import { Component } from '@angular/core';
import { ButtonDemo } from './ui/button/button.component';
import { HeaderComponent } from './ui/sidebar/header/header.component';
import { SidenavComponent } from "./ui/sidebar/sidenav/sidenav.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'growthzone-app';
}
