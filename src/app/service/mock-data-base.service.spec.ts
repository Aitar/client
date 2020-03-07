import { TestBed } from '@angular/core/testing';

import { MockDataBaseService } from './mock-data-base.service';

describe('MockDataBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDataBaseService = TestBed.get(MockDataBaseService);
    expect(service).toBeTruthy();
  });
});
