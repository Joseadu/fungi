import { Component, computed, signal } from '@angular/core';
import { Mushroom, mushrooms } from '../../core/data/mushroom-data';
import { CommonModule } from '@angular/common';
import { KnowMushroomComponent } from './know-mushroom/know-mushroom.component';
import { MushroomFilterComponent } from './mushroom-filter/mushroom-filter.component';

@Component({
  selector: 'app-mushrrom-guide',
  standalone: true,
  imports: [
    CommonModule,
    KnowMushroomComponent,
    MushroomFilterComponent
  ],
  templateUrl: './mushrrom-guide.component.html',
  styleUrl: './mushrrom-guide.component.css'
})
export class MushroomGuideComponent {
  mushrooms = signal<Mushroom[]>(mushrooms);
  selectedSeason = signal<string>(''); 
  selectedEdibility = signal<string>(''); 

  filteredMushrooms = computed(() => {
    const filtered = this.mushrooms().filter(mushroom =>
      (this.selectedSeason() === '' || mushroom.season.toLowerCase() === this.selectedSeason().toLowerCase()) &&
      (this.selectedEdibility() === '' || mushroom.edible.toLowerCase() === this.selectedEdibility().toLowerCase()) 
    );
    return filtered;
  });

  setSeason(season: string) {
    this.selectedSeason.set(season.trim().toLowerCase());
    console.log(this.selectedSeason());
  }

  setEdibility(edibility: string) {
    this.selectedEdibility.set(edibility.trim().toLowerCase());
  }
}