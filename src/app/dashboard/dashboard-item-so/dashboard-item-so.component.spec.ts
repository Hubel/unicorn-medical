import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItemSoComponent } from './dashboard-item-so.component';

describe('DashboardItemSoComponent', () => {
  let component: DashboardItemSoComponent;
  let fixture: ComponentFixture<DashboardItemSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardItemSoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItemSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
