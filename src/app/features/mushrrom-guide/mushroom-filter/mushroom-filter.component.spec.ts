import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomFilterComponent } from './mushroom-filter.component';

describe('MushroomFilterComponent', () => {
  let component: MushroomFilterComponent;
  let fixture: ComponentFixture<MushroomFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MushroomFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MushroomFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
