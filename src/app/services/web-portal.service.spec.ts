import { TestBed } from '@angular/core/testing';

import { WebPortalService } from './web-portal.service';

describe('WebPortalService', () => {
  let service: WebPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
