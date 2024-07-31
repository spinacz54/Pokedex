import { TestBed } from '@angular/core/testing';

import { ActionFacadeService } from './action-facade.service';

describe('ActionFacadeService', () => {
  let service: ActionFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
