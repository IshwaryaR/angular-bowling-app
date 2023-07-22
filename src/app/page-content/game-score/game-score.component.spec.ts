import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameScoreComponent } from './game-score.component';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameScoreComponent', () => {
  let component: GameScoreComponent;
  let fixture: ComponentFixture<GameScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameScoreComponent],
      providers: [provideMockStore({}), MatDialog],
      imports: [RouterTestingModule, MatDialogModule],
    });
    fixture = TestBed.createComponent(GameScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
