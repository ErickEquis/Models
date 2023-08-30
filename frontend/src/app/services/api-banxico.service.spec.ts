import { TestBed } from '@angular/core/testing';

import { ApiBanxicoService } from './api-banxico.service';

describe('ApiBanxicoService', () => {
  let service: ApiBanxicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBanxicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
