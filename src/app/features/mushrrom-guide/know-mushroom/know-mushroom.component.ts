import { Component, Input } from '@angular/core';
import { Mushroom } from '../../../core/data/mushroom-data';

@Component({
  selector: 'app-know-mushroom',
  standalone: true,
  imports: [],
  templateUrl: './know-mushroom.component.html',
  styleUrl: './know-mushroom.component.css'
})
export class KnowMushroomComponent {
  @Input() mushroom!: Mushroom;
}
