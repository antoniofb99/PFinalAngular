import { TestBed } from '@angular/core/testing';

import { CiclosServicesService } from './ciclos-services.service';

describe('CiclosServicesService', () => {
  let service: CiclosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiclosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
