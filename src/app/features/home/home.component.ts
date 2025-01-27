import { Component } from '@angular/core';
import { MainNavComponent } from '../../shared/main-nav/main-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainNavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
