import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainNavComponent } from './shared/main-nav/main-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainNavComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fungi';
}
