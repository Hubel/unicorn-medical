import { inject, TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        SearchService
      ]
    });
  });

  it('should ...', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
