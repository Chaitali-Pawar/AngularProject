import { TestBed, inject } from '@angular/core/testing';

import { ProcessHtppMessageServiceService } from './process-htpp-message-service.service';

describe('ProcessHtppMessageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHtppMessageServiceService]
    });
  });

  it('should be created', inject([ProcessHtppMessageServiceService], (service: ProcessHtppMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
