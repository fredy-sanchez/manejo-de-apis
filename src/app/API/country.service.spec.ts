import { TestBed } from '@angular/core/testing';

import { COUNTRYService } from './country.service';

describe('COUNTRYService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: COUNTRYService = TestBed.get(COUNTRYService);
    expect(service).toBeTruthy();
  });
});
