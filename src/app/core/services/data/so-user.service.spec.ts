import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SoUserService } from './so-user.service';
import { User } from '@userscripters/stackexchange-api-types/lib/types';
import { soApiUrl } from './so-connector.service';
import { HttpRequest } from '@angular/common/http';
import { SoResponse } from './so.types';

describe('SoUserService', () => {
  let service: SoUserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SoUserService]
    });
    service = TestBed.inject(SoUserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the user data', () => {
    const mockUserResponse: SoResponse<User> = {
      has_more: false,
      quota_max: 100,
      quota_remaining: 99,
      items: [
        {
          user_id: 123,
          display_name: 'MedicalTypeScript',
          website_url: '',
          accept_rate: 0,
          account_id: 0,
          age: 0,
          badge_counts: {
            gold: 1,
            silver: 5,
            bronze: 25
          },
          collectives: [],
          creation_date: new Date('2020-09-04T00:00:00.000Z'),
          is_employee: false,
          last_access_date: new Date('2021-09-04T00:00:00.000Z'),
          last_modified_date: new Date('2021-09-04T00:00:00.000Z'),
          link: '',
          location: '',
          profile_image: '',
          reputation: 0,
          reputation_change_day: 0,
          reputation_change_month: 0,
          reputation_change_quarter: 0,
          reputation_change_week: 0,
          reputation_change_year: 0,
          timed_penalty_date: new Date('2020-09-04T00:00:00.000Z'),
          user_type: 'registered'
        }
      ]
    };
    service.getUserName().then(user => {
      expect(user).toBeTruthy();
      expect(user).toEqual(mockUserResponse?.items?.[0]);
    });
    const req = httpTestingController.expectOne((req: HttpRequest<any>) => req.url === `${soApiUrl}/me`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockUserResponse);
  });
});
