import { Component, computed, signal } from '@angular/core';
import { Mushroom, mushrooms } from '../../core/data/mushroom-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mushrrom-guide',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './mushrrom-guide.component.html',
  styleUrl: './mushrrom-guide.component.css'
})
export class MushroomGuideComponent {
  mushrooms = signal<Mushroom[]>(mushrooms);
  selectedSeason = signal<string>(''); 
  selectedEdibility = signal<string>(''); 

  filteredMushrooms = computed(() => {
    const seasonFilter = this.selectedSeason();
    const edibilityFilter = this.selectedEdibility();

    const filtered = this.mushrooms().filter(mushroom =>
      (seasonFilter === '' || mushroom.season.toLowerCase() === seasonFilter.toLowerCase()) &&
      (edibilityFilter === '' || mushroom.edible.toLowerCase() === edibilityFilter.toLowerCase()) 
    );
    return filtered;
  });

  setSeason(season: string) {
    this.selectedSeason.set(season.trim().toLowerCase());
  }

  setEdibility(edibility: string) {
    this.selectedEdibility.set(edibility.trim().toLowerCase());
  }
}