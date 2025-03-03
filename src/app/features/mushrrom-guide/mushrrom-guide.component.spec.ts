import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomGuideComponent } from './mushrrom-guide.component';

describe('MushroomGuideComponent', () => {
  let component: MushroomGuideComponent;
  let fixture: ComponentFixture<MushroomGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MushroomGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MushroomGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
