import { TestBed, inject } from '@angular/core/testing';

import { CorporateLeaderService } from './corporate-leader.service';

describe('CorporateLeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorporateLeaderService]
    });
  });

  it('should be created', inject([CorporateLeaderService], (service: CorporateLeaderService) => {
    expect(service).toBeTruthy();
  }));
});
