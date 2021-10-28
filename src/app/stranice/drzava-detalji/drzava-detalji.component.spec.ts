import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzavaDetaljiComponent } from './drzava-detalji.component';

describe('DrzavaDetaljiComponent', () => {
  let component: DrzavaDetaljiComponent;
  let fixture: ComponentFixture<DrzavaDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzavaDetaljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzavaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
