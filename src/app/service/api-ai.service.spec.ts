import { TestBed } from '@angular/core/testing';

import { ApiAIService } from './api-ai.service';

describe('ApiAIService', () => {
  let service: ApiAIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
