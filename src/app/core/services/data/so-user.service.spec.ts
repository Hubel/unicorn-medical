import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SoUserService } from './so-user.service';

describe('SoUserService', () => {
  let service: SoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SoUserService]
    });
    service = TestBed.inject(SoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
