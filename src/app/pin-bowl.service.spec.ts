import { TestBed } from '@angular/core/testing';

import { PinBowlService } from './pin-bowl.service';

describe('PinBowlService', () => {
  let service: PinBowlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinBowlService);
  });
  it('should return 0 for all null throws', () => {
    const mygame = new PinBowlService();
    for (let i = 0; i < 20; i++) {
      mygame.roll(0); // throws 0 for 20 times
    }
    const totalScore = mygame.score();
    expect(totalScore).toBe(0);
  });

  it('should return 20 for all 1 throws', () => {
    const mygame = new PinBowlService();
    for (let i = 0; i < 20; i++) {
      mygame.roll(1); // throws 0 for 20 times
    }
    const totalScore = mygame.score();
    expect(totalScore).toBe(20);
  });

  it('should return 18 for a spare throw (4+6) followed by 3 & 2', () => {
    const mygame = new PinBowlService();
    mygame.roll(4);
    mygame.roll(6);
    mygame.roll(3);
    mygame.roll(2);
    for (let i = 0; i < 16; i++) {
      mygame.roll(0); // throws 0 for 16 times
    }
    const totalScore = mygame.score();
    expect(totalScore).toBe(18);
  });

  it('should return 20 for a strike followed by 3 & 2', () => {
    const mygame = new PinBowlService();
    mygame.roll(10);
    mygame.roll(3);
    mygame.roll(2);
    for (let i = 0; i < 17; i++) {
      mygame.roll(0); // throws 0 for 17 times
    }
    const totalScore = mygame.score();
    expect(totalScore).toBe(20);
  });
  it('should return 300 for all strikes', () => {
    const mygame = new PinBowlService();
    for (let i = 0; i < 12; i++) {
      mygame.roll(10); // throws 0 for 17 times
    }
    const totalScore = mygame.score();
    expect(totalScore).toBe(300);
  });

  /*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
