import { TestBed } from '@angular/core/testing';

import { CreditAuthorService } from './credit-author.service';

describe('CreditAuthorService', () => {
  let service: CreditAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
