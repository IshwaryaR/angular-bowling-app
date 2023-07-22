import { TestBed } from '@angular/core/testing';

import { PinBowlService } from './pin-bowl.service';

describe('PinBowlService', () => {
  let service: PinBowlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinBowlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
