import { TestBed, inject } from '@angular/core/testing';

import { NewServerService } from './new-server.service';

describe('NewServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewServerService]
    });
  });

  it('should be created', inject([NewServerService], (service: NewServerService) => {
    expect(service).toBeTruthy();
  }));
});
