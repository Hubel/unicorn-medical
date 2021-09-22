import { TestBed } from '@angular/core/testing';

import { SoQuestionsService } from './so-questions.service';

describe('SoQuestionsService', () => {
  let service: SoQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
