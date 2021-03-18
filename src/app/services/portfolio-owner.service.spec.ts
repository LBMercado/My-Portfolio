import { TestBed } from '@angular/core/testing';

import { PortfolioOwnerService } from './portfolio-owner.service';

describe('PortfolioOwnerService', () => {
  let service: PortfolioOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
