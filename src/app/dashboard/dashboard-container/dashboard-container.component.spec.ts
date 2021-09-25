import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OAuthModule } from 'angular-oauth2-oidc';

import { DashboardContainerComponent } from './dashboard-container.component';
import { SoQuestionsService } from '../../core/services/data/so-questions.service';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        OAuthModule.forRoot()
      ],
      declarations: [DashboardContainerComponent],
      providers: [SoQuestionsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
