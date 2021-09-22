import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemWeatherComponent } from './dashboard-item-weather.component';

describe('DashboardItemWeatherComponent', () => {
  let component: DashboardItemWeatherComponent;
  let fixture: ComponentFixture<DashboardItemWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardItemWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItemWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
