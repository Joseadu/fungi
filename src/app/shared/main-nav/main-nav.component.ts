import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {

  toggledMenu: boolean = false;

  toggleMenu() {
    this.toggledMenu = !this.toggledMenu;
  }
}
