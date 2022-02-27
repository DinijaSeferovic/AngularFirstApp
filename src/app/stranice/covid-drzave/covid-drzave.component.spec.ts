import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidDrzaveComponent } from './covid-drzave.component';

describe('CovidDrzaveComponent', () => {
  let component: CovidDrzaveComponent;
  let fixture: ComponentFixture<CovidDrzaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidDrzaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidDrzaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
