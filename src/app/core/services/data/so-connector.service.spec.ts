import { TestBed } from '@angular/core/testing';

import { SoConnectorService } from './so-connector.service';

describe('SoConnectorService', () => {
  let service: SoConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
