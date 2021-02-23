import { TestBed } from '@angular/core/testing';

import { AsignaturaServicesService } from './asignatura-services.service';

describe('AsignaturaServicesService', () => {
  let service: AsignaturaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
