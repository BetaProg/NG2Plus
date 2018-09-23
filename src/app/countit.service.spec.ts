import { TestBed } from '@angular/core/testing';

import { CountitService } from './countit.service';

describe('CountitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountitService = TestBed.get(CountitService);
    expect(service).toBeTruthy();
  });
});
