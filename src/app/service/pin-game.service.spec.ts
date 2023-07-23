import { TestBed } from '@angular/core/testing';

import { PinGameService } from './pin-game.service';

describe('PinGameService', () => {
  let service: PinGameService;
  let pingame: PinGameService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinGameService);
    pingame = new PinGameService();
  });
  function bowlingAction(pins: number, times: number) {
    for (let i = 0; i < times; i++) {
      pingame.bowling(pins);
    }
  }

  it('should return 0 for all null throws', () => {
    bowlingAction(0, 20); // throws 0 for 20 times
    const { score } = pingame.calculate();
    expect(score).toBe(0);
  });

  it('should return 20 for all 1 throws', () => {
    bowlingAction(1, 20); // throws 1 for 20 times
    const { score } = pingame.calculate();
    expect(score).toBe(20);
  });

  it('should return 300 for all strikes', () => {
    bowlingAction(10, 12); // throws 10 for 12 times
    const { score } = pingame.calculate();
    expect(score).toBe(300);
  });

  it('should return 18 for a spare throw (4+6) followed by 3 & 2', () => {
    pingame.bowling(4);
    pingame.bowling(6);
    pingame.bowling(3);
    pingame.bowling(2);
    bowlingAction(0, 16); // throws 0 for 16 times
    const { score } = pingame.calculate();
    expect(score).toBe(18);
  });

  it('should return 20 for a strike followed by 3 & 2', () => {
    pingame.bowling(10);
    pingame.bowling(3);
    pingame.bowling(2);
    bowlingAction(0, 17); // throws 0 for 17 times
    const { score } = pingame.calculate();
    expect(score).toBe(20);
  });
});
