import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {
  constructor(
    private elRef: ElementRef
  ) {}

  toggledMenu: boolean = false;

  toggleMenu() {
    this.toggledMenu = !this.toggledMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isInsideMenu = this.elRef.nativeElement.contains(target);
    const isNavLink = target.closest('a');

    if (!target.closest('.nav')) {
      this.toggledMenu = false;
    }

    if (!isInsideMenu || isNavLink) {
      this.toggledMenu = false;
    }
  }
}