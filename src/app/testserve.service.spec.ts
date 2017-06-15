import { TestBed, inject } from '@angular/core/testing';

import { TestserveService } from './testserve.service';

describe('TestserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestserveService]
    });
  });

  it('should ...', inject([TestserveService], (service: TestserveService) => {
    expect(service).toBeTruthy();
  }));
});
