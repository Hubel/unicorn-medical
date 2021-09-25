import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SoConnectorService } from './so-connector.service';

describe('SoConnectorService', () => {
  let service: SoConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SoConnectorService]
    });
    service = TestBed.inject(SoConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
