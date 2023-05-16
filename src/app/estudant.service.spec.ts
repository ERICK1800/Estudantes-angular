import { TestBed } from '@angular/core/testing';

import { EstudantService } from './estudant.service';

describe('EstudantService', () => {
  let service: EstudantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
