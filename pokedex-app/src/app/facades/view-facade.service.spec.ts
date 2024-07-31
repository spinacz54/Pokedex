import { TestBed } from '@angular/core/testing';

import { ViewFacadeService } from './view-facade.service';

describe('ViewFacadeService', () => {
  let service: ViewFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
