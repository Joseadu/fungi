import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MushrromGuideComponent } from './mushrrom-guide.component';

describe('MushrromGuideComponent', () => {
  let component: MushrromGuideComponent;
  let fixture: ComponentFixture<MushrromGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MushrromGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MushrromGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
