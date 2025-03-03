import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mushroom-filter',
  standalone: true,
  imports: [],
  templateUrl: './mushroom-filter.component.html',
  styleUrl: './mushroom-filter.component.css'
})
export class MushroomFilterComponent {
  @Output() seasonSelected = new EventEmitter<string>();
  @Output() edibilitySelected = new EventEmitter<string>();

  selectSeason(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.seasonSelected.emit(value);
  }

  selectEdibility(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.edibilitySelected.emit(value);
  }
}