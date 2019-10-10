import { TestBed } from '@angular/core/testing';

import { DatoAmbientalService } from './dato-ambiental.service';

describe('DatoAmbientalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatoAmbientalService = TestBed.get(DatoAmbientalService);
    expect(service).toBeTruthy();
  });
});
