import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTimeComponent } from './chart-time.component';

describe('ChartTimeComponent', () => {
  let component: ChartTimeComponent;
  let fixture: ComponentFixture<ChartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
