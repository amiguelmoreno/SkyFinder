import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTypeSelectorComponent } from './flight-type-selector.component';

describe('FlightTypeSelectorComponent', () => {
  let component: FlightTypeSelectorComponent;
  let fixture: ComponentFixture<FlightTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightTypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
