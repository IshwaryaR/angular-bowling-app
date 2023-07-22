import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRollComponent } from './game-roll.component';

describe('GameRollComponent', () => {
  let component: GameRollComponent;
  let fixture: ComponentFixture<GameRollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameRollComponent]
    });
    fixture = TestBed.createComponent(GameRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
