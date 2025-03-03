import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMushroomComponent } from './know-mushroom.component';

describe('KnowMushroomComponent', () => {
  let component: KnowMushroomComponent;
  let fixture: ComponentFixture<KnowMushroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowMushroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowMushroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
